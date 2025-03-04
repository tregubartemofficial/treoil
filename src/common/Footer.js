import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: grey[100],
      }}
      component='footer'
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Про нас
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Наша фірма знаходиться у Вінниці та займається з 2021 продажем і
              поставками олив, мастил, технічних рідин, емульсолів для токарних
              робіт компаній: Texaco, Unil, Prista Oil, Orlen Oil.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Контакти
            </Typography>
            <div>
              <a
                href='https://www.google.com/maps/place/%D0%A2%D1%80%D0%B5%D0%BE%D0%B9%D0%BB/@49.2381933,28.4279183,17.28z/data=!4m6!3m5!1s0x472d5da73e9773dd:0xa89b208970bd654a!8m2!3d49.2382312!4d28.4276062!16s%2Fg%2F11p06yr7h5?entry=ttu'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Stack direction='row' padding={0.2} spacing={0.5}>
                  <LocationOnIcon />
                  <Typography
                    sx={{
                      ':hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Вінниця, Максимовича 10
                  </Typography>
                </Stack>
              </a>
            </div>

            <Stack direction='row' padding={0.2} spacing={0.5}>
              <EmailIcon />
              <Typography>tregub.vin@gmail.com</Typography>
            </Stack>
            <Stack direction='row' padding={0.2} spacing={0.5}>
              <PhoneIcon />
              <Typography>
                (067) 724-04-65 <br /> (093) 203-83-70
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Слідкуйте за нами
            </Typography>
            <a
              href='https://www.instagram.com/treoilvin'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram />
            </a>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
