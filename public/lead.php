<?php
// Lead form → Telegram. Credentials live OUTSIDE the web root:
//   ~/treoil-config.php  (one level above public_html), returning:
//   <?php return ['bot_token' => '123:ABC', 'chat_id' => '123456789'];
declare(strict_types=1);

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function respond(bool $ok, string $error = ''): never {
    global $wantsJson;
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ok ? 200 : 400);
        echo json_encode(['ok' => $ok, 'error' => $error]);
    } else {
        header('Location: ' . ($ok ? '/dyakuyemo/' : '/#lead'), true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    exit;
}

// Honeypot: bots fill hidden fields. Pretend success.
if (!empty($_POST['website'])) respond(true);

$clean = static fn(string $k, int $max): string =>
    mb_substr(trim(strip_tags((string)($_POST[$k] ?? ''))), 0, $max);

$name    = $clean('name', 80);
$phone   = $clean('phone', 20);
$city    = $clean('city', 80);
$message = $clean('message', 1500);
$product = $clean('product', 200);
$page    = $clean('page', 200);

$digits = preg_replace('/\D/', '', $phone);
if ($name === '' || strlen($digits) < 10 || strlen($digits) > 13) respond(false, 'invalid');

// Basic per-IP rate limit: 5 requests / 10 min.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rlFile = sys_get_temp_dir() . '/treoil_rl_' . md5($ip);
$hits = array_filter(
    json_decode(@file_get_contents($rlFile) ?: '[]', true) ?: [],
    static fn($t) => $t > time() - 600
);
if (count($hits) >= 5) respond(false, 'rate');
$hits[] = time();
@file_put_contents($rlFile, json_encode(array_values($hits)));

$configPath = dirname(__DIR__) . '/treoil-config.php';
if (!is_file($configPath)) respond(false, 'config');
$config = require $configPath;

$e = static fn(string $s): string => htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
$lines = [
    '<b>Нова заявка з treoil.vn.ua</b>',
    '👤 ' . $e($name),
    '📞 <a href="tel:+' . $e($digits) . '">' . $e($phone) . '</a>',
];
if ($city !== '')    $lines[] = '📍 ' . $e($city);
if ($product !== '') $lines[] = '🛢 ' . $e($product);
if ($message !== '') $lines[] = "\n" . $e($message);
if ($page !== '')    $lines[] = "\n<i>Сторінка: " . $e($page) . '</i>';

$ch = curl_init('https://api.telegram.org/bot' . $config['bot_token'] . '/sendMessage');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_POSTFIELDS => [
        'chat_id' => $config['chat_id'],
        'text' => implode("\n", $lines),
        'parse_mode' => 'HTML',
        'disable_web_page_preview' => 'true',
    ],
]);
$result = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

respond($result !== false && $status === 200, 'telegram');
