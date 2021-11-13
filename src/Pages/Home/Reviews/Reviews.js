import { Container, Grid, Paper } from '@mui/material';
import React, { useState,useEffect } from 'react';
import  Typography  from '@mui/material/Typography';



const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch("https://desolate-stream-72668.herokuapp.com/reviews")
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])

    return (
        <Container sx={{marginTop:3,}}>
            <Typography variant="h4" sx={{marginTop:4,marginBottom:4,color:'white',textAlign:'center',fontWeight:'bold'}}>
                Customer Reviews
            </Typography>
            <Grid container spacing={2}>
                    {
                        reviews.map(review=> 
                            <Grid item sm={6} md={4}>
                            <Paper sx={{p:2}}>
                              <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="subtitle1" gutterBottom component="div">
                             Comment: {review.comment}
                             </Typography>
                              <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="subtitle2" gutterBottom component="div">
                             Email: {review.email}
                             </Typography>
                             </Paper>
                             </Grid>
                             )     
                    }
            </Grid>
        </Container>
    );
};

export default Reviews;