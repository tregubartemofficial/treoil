import React from 'react';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroSection = () => {
  return (
    <Stack
      sx={{
        background:
          'linear-gradient(0deg, rgba(7,7,142,1) 35%, rgba(25,118,210,1) 100%)',
        height: '95vh',
        position: 'relative',
      }}
      justifyContent='space-evenly'
    >
      <Stack
        direction='row'
        alignContent='center'
        justifyContent={{ xs: 'center', md: 'space-around' }}
        alignItems='center'
      >
        <motion.div
          initial={{ textShadow: '0px 0px 0px #ffffff' }}
          animate={{ textShadow: '0px 0px 40px #ffffff' }}
          exit={{ textShadow: '0px 0px 0px #ffffff' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <Stack alignItems='center'>
              <Typography variant='h3' sx={{ color: 'white' }}>
                TREOIL
              </Typography>
              <Typography variant='h4' sx={{ color: 'white' }}>
                Оливи та мастила
              </Typography>
            </Stack>
          </motion.div>
        </motion.div>
        <Stack sx={{ display: { xs: 'none', md: 'block' } }}>
          <motion.img
            alt='logo-barrels'
            src='/images/barrels.png'
            style={{
              width: '40vw',
              height: '60vh',
              objectFit: 'contain',
            }}
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </Stack>
      </Stack>
      <motion.div
        initial={{ y: -5 }}
        animate={{ y: 15 }}
        exit={{ y: -5 }}
        transition={{ duration: 1.7, repeat: Infinity, repeatType: 'reverse' }}
      >
        <KeyboardArrowDownIcon
          sx={{ color: '#ffffff', width: '95vw', height: '4em' }}
        />
      </motion.div>
    </Stack>
  );
};

export default HeroSection;
