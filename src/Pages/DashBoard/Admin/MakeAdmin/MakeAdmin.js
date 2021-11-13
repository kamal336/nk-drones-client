import { Button, Container,Grid,TextField } from '@mui/material';
import React, { useState } from 'react';
import  Typography  from '@mui/material/Typography';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');

    const handleOnBlur = e =>{
        setEmail(e.target.value)
       console.log(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};

        fetch('https://desolate-stream-72668.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })

        e.preventDefault();
    }

    return (
        <Container sx={{marginTop:4}}>
            <Typography variant="h4" style={{textAlign:"center",marginTop:4}}>
                Make a Admin
            </Typography>
            <Grid container  style={{display:'flex',justifyContent:'center'}}>
            <Grid item sm={12} md={6} sx={{marginTop:4}}>
             <form onSubmit={handleAdminSubmit}>
                <TextField
                       sx={{width:'80%',marginBottom:2}}
                       id="email"
                       label="Email"
                       type="email"
                       onBlur={handleOnBlur}
                       variant="standard"
                       />
                <br />
                <Button type="submit"  variant="contained">Make Admin</Button>
               </form>
               </Grid>
               </Grid>
        </Container>
    );
};

export default MakeAdmin;