import { Button, Container,Grid,TextField } from '@mui/material';
import React, { useState } from 'react';
import  Typography  from '@mui/material/Typography'
import useAuth from './../../../../hooks/useAuth';
import swal from 'sweetalert';
const Review = () => {

    const {user} = useAuth();
    const [message,setMessage] = useState('');
    const email = user?.email;
    const handleOnBlur = e =>{
        setMessage(e.target.value)
       console.log(e.target.value);
    }

    const handleAdminSubmit = e =>{
        console.log(message);
        // const user = {email};
        const review = {
            message,
            email
        }

        console.log(review);
 
        fetch('https://desolate-stream-72668.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                 
                  swal("Successfully!! Place Order");
                }
            });

        e.preventDefault();
    }
    return (
        <Container sx={{marginTop:4}}>
        <Typography variant="h4" style={{textAlign:"center",marginTop:4}}>
            Make a Review
        </Typography>
        <Grid container  style={{display:'flex',justifyContent:'center'}}>
        <Grid item sm={12} md={6} sx={{marginTop:4}}>
         <form onSubmit={handleAdminSubmit}>
         <TextField
                   sx={{width:'80%',marginBottom:2}}
                   id="email"
                   value={user?.email}
                   variant="standard"
                   />
         <TextField
                   sx={{width:'80%',marginBottom:2}}
                   id="email"
                   label="Comment"
                   name="comment"
                   onBlur={handleOnBlur}
                   variant="standard"
                   />
            <br />
            <Button type="submit"  variant="contained">Review</Button>
           </form>
           </Grid>
           </Grid>
    </Container>
    );
};

export default Review;