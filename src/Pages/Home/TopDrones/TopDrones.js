import { Container, Grid, Typography } from '@mui/material';
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Container>
        <Typography variant="h4" sx={{marginTop:3,marginBottom:3,color:'blueviolet',textAlign:'center'}}>
          Our Top Drones
        </Typography>
        <Grid container spacing={2}>
             {
                 topDrones.map(topdrone=> 
                    <TopDrone 
                    key={topdrone._id}
                    topdrone={topdrone}
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    />
                    )
             }
        </Grid>
        </Container>
    );
};

export default TopDrones;