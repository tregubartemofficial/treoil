import React from 'react';
import { AppBar, Avatar, Button, Stack, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const headerButtonStyles = {
  color: 'white',
  display: 'block',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
};

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Avatar
          component={Link}
          to='/'
          variant='square'
          src='./logo-white.png'
          alt='logo'
        />
        <Stack direction='row' justifyContent='space-around' sx={{ mx: 3 }}>
          <Button
            component={Link}
            to='/catalog'
            sx={headerButtonStyles}
            disableTouchRipple
            size='large'
          >
            Каталог
          </Button>
          <Button
            component={Link}
            to='/сontacts'
            sx={headerButtonStyles}
            disableTouchRipple
            size='large'
          >
            Контакти
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
