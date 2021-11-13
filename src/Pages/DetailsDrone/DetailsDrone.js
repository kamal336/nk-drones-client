
import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Card  from '@mui/material/Card';
import  CardMedia  from '@mui/material/CardMedia';
import  CardContent  from '@mui/material/CardContent';
import  CardActions  from '@mui/material/CardActions';
import { Box } from '@mui/system';
import PlaceOrder from './../PlaceOrder/PlaceOrder';
import { Link } from 'react-router-dom';


const DetailsDrone = () => {
    const {id} = useParams();
    const [details,setDetails] = useState({});
    
    useEffect(()=>{
        fetch(`https://desolate-stream-72668.herokuapp.com/drones/${id}`)
        .then(res=> res.json())
        .then(data=> setDetails(data))
    },[id])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <Container >
        <Typography variant="h4" sx={{marginTop:3,marginBottom:3,color:'navy',textAlign:'center',fontWeight:'bold'}}>
            Show Drone Details
        </Typography>
        <Box style={{display:'flex',justifyContent:'center',}}>
        <Grid item sm={12} md={4} >
          <Card sx={{p:2}}>
            <CardMedia
                component="img"
                height="160"
                image={details?.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center',color:'MediumBlue',fontWeight:'bold'}}>
                {details?.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
               {details?.description}
                </Typography>
                <Typography variant="h6">
                    Price: {details?.price} $
                </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={handleOpen} sx={{marginRight:5,marginLeft:2,marginBottom:2}}> Place Order</Button>
              <Link style={{textDecoration:'none'}} to="/home">
              <Button sx={{marginLeft:3,marginBottom:2}} variant="contained"> Back Home</Button>
              </Link>
            </CardActions>
            <PlaceOrder 
            open={open}
            handleClose={handleClose}
            details={details}
            />
            
             </Card>
        </Grid>
        </Box>
        </Container>
    );
};

export default DetailsDrone;