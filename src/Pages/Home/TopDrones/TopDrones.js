import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopDrone from '../TopDrone/TopDrone';

const TopDrones = () => {
    const [drones,setDrones] = useState([]);
    
    useEffect(()=>{
        fetch("https://desolate-stream-72668.herokuapp.com/drones")
        .then(res=> res.json())
        .then(data=> setDrones(data))
    },[])

    const topDrones = drones.slice(0,6);


    return (
        <Container>
        <Typography variant="h4" sx={{marginTop:4,marginBottom:4,color:'white',textAlign:'center',fontWeight:'bold'}}>
          Our Wonderul Drones
        </Typography>
        <Grid container spacing={3}>
             {
                 topDrones.map(topdrone=> 
                    <TopDrone 
                    key={topdrone._id}
                    topdrone={topdrone}
                    />
                    )
             }
        </Grid>
        </Container>
    );
};

export default TopDrones;