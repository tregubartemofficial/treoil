import React from 'react';
import HeroSection from '../components/HeroSection';
import { Avatar, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const TitleTypography = ({ textAlign = 'start', children }) => (
  <Typography variant='h4' sx={{ textAlign: textAlign, fontWeight: 600 }}>
    {children}
  </Typography>
);

const SectionStack = ({ bgcolor = '#fff', children }) => (
  <Stack alignItems='center' bgcolor={bgcolor} py={15} px={{ xs: 5, md: 15 }}>
    {children}
  </Stack>
);

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Stack component='article'>
        <SectionStack>
          <Stack spacing={2}>
            <TitleTypography textAlign='center'>Про нас</TitleTypography>
            <Typography letterSpacing={'0.06em'} maxWidth={800} fontSize={19}>
              Наша фірма, заснована у 2021 році, знаходиться у Вінниці і
              спеціалізується на продажу та постачанні високоякісних олив,
              мастил, технічних рідин, а також емульсолів для токарних робіт. Ми
              співпрацюємо з провідними брендами, такими як Texaco, Unil, Prista
              Oil, та Orlen Oil, що дозволяє нам забезпечувати наших клієнтів
              найкращою продукцією на ринку. Завдяки професійному підходу та
              високим стандартам обслуговування, ми здобули довіру багатьох
              клієнтів та партнерів. Наша мета – забезпечити кожного споживача
              необхідними матеріалами для безперебійної та ефективної роботи.
            </Typography>
          </Stack>
        </SectionStack>
        <SectionStack>
          <Stack spacing={2}>
            <TitleTypography>Асортимент</TitleTypography>
            <Typography letterSpacing={'0.06em'} maxWidth={800} fontSize={19}>
              У асортименті автомобільні оливи для пересувного транспорту і
              стаціонарних установок. Є оливи для газових двигунів-генераторів,
              когенераційних установок, які вже застосовуються на підприємствах
              теплоенерго. Промислові мастила, емульсоли, гас, нефрас,
              уайтспіріт. Пропонуємо трансформаторну, компресорну і турбінну
              оливи. Оливи компресорні для новітніх систем кондиціонування та
              холодильного обладнання. Є в наявності мастила: термостійкі, для
              електромоторів,
            </Typography>
          </Stack>
          <Stack direction='row' flexWrap='wrap' marginTop={3}>
            <Avatar
              variant='square'
              alt='Orlen'
              src='/images/Orlen.png'
              sx={{ height: 70, width: 70, mx: 1 }}
            />
            <Avatar
              variant='square'
              alt='Texaco'
              src='/images/Texaco.png'
              sx={{ height: 70, width: 70, mx: 1 }}
            />
            <img
              alt='Prista'
              src='/images/Prista.png'
              style={{
                height: '70px',
                width: '70px',
                objectFit: 'contain',
                margin: '0 8px',
              }}
            />
            <img
              alt='Unil'
              src='/images/Unil.png'
              style={{
                height: '80px',
                width: '80px',
                objectFit: 'contain',
                margin: '0 8px',
              }}
            />
          </Stack>
        </SectionStack>
        <SectionStack bgcolor={grey[100]}>
          <Stack sx={{ pr: { xs: 0, md: 10 } }} spacing={2}>
            <TitleTypography>Доставка</TitleTypography>
            <Typography letterSpacing={'0.06em'} maxWidth={800} fontSize={19}>
              Ми забезпечуємо доставку товару безпосередньо на об'єкт замовника,
              гарантуючи своєчасність та зручність отримання продукції. Оливи та
              мастила розливаються в каністри по 4, 10, 20 літрів, а також у
              бочки об'ємом 210 літрів і ємності на 1000 літрів. За необхідності
              наші спеціалісти можуть виїхати на місце для уточнення технічних
              питань, проведення огляду об'єкта, складання комерційної
              пропозиції та надання консультацій. Ми прагнемо максимально
              задовольнити потреби наших клієнтів, забезпечуючи індивідуальний
              підхід та високий рівень сервісу.
            </Typography>
          </Stack>
          <Stack direction='row' marginTop={3}>
            <Avatar
              variant='square'
              alt='barrel'
              src='/images/barrel.png'
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant='square'
              alt='20L'
              src='/images/20L.png'
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant='square'
              alt='10L'
              src='/images/10L.png'
              sx={{ height: 70, width: 70 }}
            />
            <Avatar
              variant='square'
              alt='4L'
              src='/images/4L.png'
              sx={{ height: 70, width: 70 }}
            />
          </Stack>
        </SectionStack>
        <Stack alignItems='center' sx={{ mt: 10, mb: 5 }}>
          <TitleTypography textAlign='center'>Знаходимось</TitleTypography>
          <Stack sx={{ width: '100%', height: 300, mt: 2 }} alignItems='center'>
            <iframe
              title='TREOIL Location Map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6101.428664284915!2d28.42624796042512!3d49.23700397727064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5da73e9773dd%3A0xa89b208970bd654a!2z0KLRgNC10L7QudC7!5e0!3m2!1suk!2sua!4v1690721689427!5m2!1suk!2sua'
              style={{
                border: '0',
                width: '100%',
                height: '100%',
                maxWidth: '800px',
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MainPage;
