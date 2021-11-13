import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Drone from './../Drone/Drone';

const bgColor = {
    backgroundColor: 	'rgba(4, 4, 49, 0.897)'
}

const Drones = () => {
    const [drones,setDrones] = useState([]);
    
    useEffect(()=>{
        fetch("https://desolate-stream-72668.herokuapp.com/drones")
        .then(res=> res.json())
        .then(data=> setDrones(data))
    },[])
   
    
    return (
        <Box style={bgColor}>
        <Header />
        <Container>
        <Typography variant="h4" sx={{marginTop:4,marginBottom:4,color:'white',textAlign:'center',fontWeight:'bold'}}>
          Our Wonderul Drones
        </Typography>
        <Grid container spacing={3}>
             {
                 drones.map(drone=> 
                    <Drone 
                    key={drone._id}
                    drone={drone}
                    />
                    )
             }
        </Grid>
        </Container>
        </Box>
    );
};

export default Drones;