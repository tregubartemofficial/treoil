# TREOIL

Сайт [treoil.vn.ua](https://treoil.vn.ua): оливи та мастила Texaco, Unil, Prista, Orlen з доставкою по Україні.

Статичний сайт на [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Токени кольорів і шрифтів — у `src/styles/global.css` (`@theme`). Хостинг: thehost.ua (Apache + PHP).

## Розробка

```sh
nvm use          # Node 24 (.nvmrc)
npm install
npm run dev      # http://localhost:4321
npm run build    # статичний сайт у dist/
npm run check    # перевірка типів
npm run format   # Prettier (сортує класи Tailwind)
```

## Структура

- `src/data/products.json` — каталог товарів (назва, бренд, тип, в'язкість, опис, специфікації, фото).
- `src/data/site.ts` — контакти, адреса, бренди.
- `src/assets/images/` — фото; Astro сам стискає їх у WebP.
- `src/pages/` — головна, каталог `/assortment/`, сторінки товарів `/assortment/<slug>/`, довідка `/dovidka/`.
- `public/lead.php` — надсилає заявки з форми в Telegram.
- `public/.htaccess` — HTTPS-редирект, кешування, 404.
- `scripts/make-icons.mjs` — генерує іконки та `og.png` з `public/favicon.svg`.

### Додати товар

Додайте запис у `src/data/products.json`, а фото покладіть у `src/assets/images/<бренд>/`. `type`: `motor | gear | antifreeze | industrial`.

## Заявки в Telegram

1. Створіть бота через @BotFather і скопіюйте токен.
2. Напишіть боту будь-яке повідомлення, потім відкрийте `https://api.telegram.org/bot<TOKEN>/getUpdates` і візьміть `chat.id`.
3. На хостингу **поза** `public_html` (на рівень вище) створіть `treoil-config.php`:
   ```php
   <?php return ['bot_token' => '123:ABC...', 'chat_id' => '123456789'];
   ```
4. У панелі ISPManager увімкніть PHP 8.1 або новіший.

## Деплой

Під час пушу в `master` GitHub Action збирає сайт і заливає `dist/` по FTPS. Потрібні секрети репозиторію: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR` (наприклад `/www/treoil.vn.ua/`).
