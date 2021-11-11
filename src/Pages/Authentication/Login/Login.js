import { Container, TextField, Typography, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import Header from './../../Shared/Header/Header';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {loginUser,isLoading,user,googleLogin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [loginInfo,setLoginInfo] = useState({});

    const handleChange = e =>{
      const value= e.target.value;
      const field= e.target.name;
      const newLoginInfo  = {...loginInfo}
      newLoginInfo[field] = value;
      setLoginInfo(newLoginInfo);
    
    }

    const handleSubmit = e =>{

        loginUser(loginInfo.email, loginInfo.password, location, history);
        console.log(loginInfo.email, loginInfo.password);
        e.preventDefault();
    }

    return (
        <>
        <Header />
        <Container>
             <Grid container spacing={2} sx={{marginTop:5}}>
                 <Grid item sm={12} md={6}>
                 <Typography variant="h4" sx={{marginTop:3,marginBottom:3}}>
                    Please login
                </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="email"
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            variant="standard"
                            />
                        <TextField
                            sx={{width:'80%',marginBottom:2}}
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            variant="standard"
                            />
                       {isLoading&&     <CircularProgress />}
                      <Link to="/register" style={{textDecoration:'none',marginBottom:3}} >
                       <Button  variant="text">Already Have Account? Please Login</Button>
                       </Link>
                       <br />
                        <Button type="submit"  variant="contained">Login</Button>
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

export default Login;