import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Drone from './../Drone/Drone';

const Drones = () => {
    const [drones,setDrones] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/drones")
        .then(res=> res.json())
        .then(data=> setDrones(data))
    },[])
   
    
    return (
        <>
        <Header />
        <Container>
            <Typography variant="h4" sx={{marginTop:3,color:'cadetBlue',marginBottom:3,textAlign:'center'}}>
                Our Worderful Drones
            </Typography>
        <Grid container spacing={2}>
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
        </>
    );
};

export default Drones;