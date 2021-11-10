import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopDrone from '../TopDrone/TopDrone';

const TopDrones = () => {
    const [drones,setDrones] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/drones")
        .then(res=> res.json())
        .then(data=> setDrones(data))
    },[])

    const topDrones = drones.slice(0,6);

    return (
        <Container>
        <Grid container spacing={2}>
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