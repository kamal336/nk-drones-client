import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from './../../../hooks/useAuth';

const iconStyle={
        fontSize: '40px',
        color: 'white',
        marginRight: '25px'
    
}

const Footer = () => {
    const {admin} = useAuth();
    return (
        <Box  sx={{p:4,background:'#3f51b5',marginTop:4,color:'white'}} >
        <Container>
          <Grid container style={{textAlign:'center'}}>
          <Grid item sm={12} md={4}>
                <Typography variant="h5" style={{fontFamily:'-moz-initial',fontWeight:"500"}}>NK Drones</Typography>
                <Typography variant="subtitle1">It's a wonderful online drones shop.</Typography>
                 <Typography variant="subtitle1">We always provide quality product and services.</Typography>
                 <Typography variant="subtitle1" >CopyRight &copy; 2021 NK Drones. All Rights Reserved.</Typography>
            </Grid>
            <Grid item sm={12} md={4}>
                <Typography variant="h6">Home</Typography>
              {admin? <Box> <Typography variant="subtitle1">Add Product</Typography>
                <Typography variant="subtitle1">Make Admin</Typography>
                <Typography variant="subtitle1">Manage Order</Typography>
                </Box>:
                <Box>
                 <Typography variant="subtitle1">Review</Typography>
                <Typography variant="subtitle1">My Order</Typography>
                <Typography variant="subtitle1">All Drones</Typography>
                </Box>
                }
            </Grid>
            
            <Grid item sm={12} md={4}>
                <Typography variant="h5">
                    Social Icon
                </Typography>
            <Box sx={{marginTop:3}}>
                <i class="fab fa-facebook-square icon" style={iconStyle}></i>
                <i class="fab fa-youtube-square icon" style={iconStyle}></i>
                <i class="fab fa-twitter icon" style={iconStyle}></i>
                <i class="fab fa-instagram-square icon" style={iconStyle}></i>
                <i class="fab fa-linkedin icon" style={iconStyle}></i>
            </Box>
            </Grid>

          </Grid>
        </Container>
    </Box>
    );
};

export default Footer;