import { Container, TextField, Typography, Grid, Button } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './../../Shared/Header/Header';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {registerUser,googleLogin} = useAuth();
    const history = useHistory();
    const [userInfo,setUserInfo] = useState({});

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newUser = {...userInfo};
        newUser[field] = value;
        setUserInfo(newUser);

    }

    const handleSubmit = e =>{
        if (userInfo.password !== userInfo.password2) {
            alert('Your password did not match');
            return
        }
        console.log('hi',userInfo.email,userInfo.password,userInfo.name)
        registerUser(userInfo.email,userInfo.password, userInfo.name, history);
        e.preventDefault();
    }
    return (
        <>
        <Header />
        <Container>
             <Grid container spacing={2} sx={{marginTop:5}}>
                 <Grid item sm={12} md={6}>
                 <Typography variant="h4" sx={{marginTop:3,marginBottom:3}}>
                    Please Register
                </Typography>
                    <form onSubmit={handleSubmit}> 
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="name"
                            label="Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            />
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="email"
                            label="Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            />
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                            />
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="password2"
                            label="Re-Type Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                            />
                       <Link to="/login" style={{textDecoration:'none',marginBottom:3}} >
                       <Button  variant="text">Already Have Account? Please Login</Button>
                       <br />
                       </Link>
                        <Button type="submit" variant="contained">Regiter</Button>
                    </form>
                    <button onClick={googleLogin}>Google</button>
                 </Grid>
                 
                 <Grid item sm={12} md={6}>
                     <img width="80%" src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                 </Grid>
             </Grid>
        </Container>
        </>
    );
};

export default Register;