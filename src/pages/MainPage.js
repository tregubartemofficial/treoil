import React from 'react';
import HeroSection from '../components/HeroSection';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const TitleTypography = ({ textAlign = 'start', children }) => (
  <Typography variant='h4' sx={{ textAlign: textAlign, fontWeight: 600 }}>
    {children}
  </Typography>
);

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Stack component='article'>
        <Stack py={15} px={20}>
          <TitleTypography>
            Про нас
          </TitleTypography>
          <Typography letterSpacing={'0.06em'}>
            Наша фірма знаходиться у Вінниці та займається з 2021 року продажем
            і поставками олив, мастил, технічних рідин, емульсолів для токарних
            робіт компаній: Texaco, Unil, Prista Oil, Orlen Oil.
          </Typography>
        </Stack>
        <Stack alignItems='center' py={15} px={20}>
          <Stack>
            <TitleTypography>Асортимент</TitleTypography>
            <Typography letterSpacing={'0.06em'}>
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
          <Stack direction='row' flexWrap='wrap'>
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
        </Stack>
        <Stack alignItems='center' py={15} px={20} bgcolor={grey[100]}>
          <Stack sx={{ pr: { xs: 0, md: 10 } }}>
            <TitleTypography>Доставка</TitleTypography>
            <Typography letterSpacing={'0.06em'}>
              Поставку товару можемо здійснювати безпосередньо на об'єкт. Масло
              заливається в каністри по 4, 10, 20 літрів. Бочки 210 літрів і
              ємності на 1000 літрів. При необхідності можемо приїхати для
              уточнення технічних питань, складання комерційної пропозиції і
              т.п.
            </Typography>
          </Stack>
          <Stack direction='row'>
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
        </Stack>
        <Stack alignItems='center' sx={{ mt: 30, mb: 5 }}>
          <TitleTypography textAlign='center'>Знаходимось</TitleTypography>
          <Box sx={{ width: '90%', height: 300 }}>
            <iframe
              title='TREOIL Location Map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6101.428664284915!2d28.42624796042512!3d49.23700397727064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5da73e9773dd%3A0xa89b208970bd654a!2z0KLRgNC10L7QudC7!5e0!3m2!1suk!2sua!4v1690721689427!5m2!1suk!2sua'
              style={{ border: '0', width: '100%', height: '100%' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default MainPage;
