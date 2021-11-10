import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link}  from 'react-router-dom';



const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NK Drones
          </Typography>
          <Link style={{textDecoration:'none',color:'white',marginRight:'10px'}} to="/home">
           Home
          </Link>
          <Link style={{textDecoration:'none',color:'white',marginRight:'10px'}} to="/alldrones">
           All Drones 
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to="/login">
           Login
          </Link>
          
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    );
};

export default Header;