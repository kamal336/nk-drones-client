import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from './../../../../hooks/useAuth';
import { Container, Typography } from '@mui/material';


const MyOrder = () => {

    const {user} = useAuth();
    const [myOrders,setMyOrders] = React.useState([]);

    React.useEffect(()=>{
        fetch(`https://desolate-stream-72668.herokuapp.com/orders/myorders?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=>{
            setMyOrders(data);
        })
    },[user?.email])
    return (
        <Container>
            <Typography variant="h4" sx={{textAlign:'center',color:'primary.main',marginTop:3,marginBottom:3}}>
                My Order
            </Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>SL.</TableCell>
                    <TableCell align="right">Product Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Mobile</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {myOrders.map((row,index) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {index+1}
                    </TableCell>
                    <TableCell align="right">{row?.productName}</TableCell>
                    <TableCell align="right">{row?.email}</TableCell>
                    <TableCell align="right">$ {row?.productPrice}</TableCell>
                    <TableCell align="right">{row?.address}</TableCell>
                    <TableCell align="right">{row?.mobile}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;