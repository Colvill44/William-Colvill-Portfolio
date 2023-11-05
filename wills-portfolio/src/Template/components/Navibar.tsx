import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import Logo from '../../Assets/logo.png';

function Navbar() {

  const pages = ['Home', 'Skills', 'Contact'];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 50,
              paddingRight: 2,
            }}
            alt="Logo"
            src={Logo}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 200,
              fontFamily: 'roboto',
              color: 'white',
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >
            William Colvill
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;