import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from './../../../../hooks/useAuth';
import { Button, Container, Typography } from '@mui/material';


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

    

    const handleDelete = (id) =>{
        // confirm to delete 
        const procede = window.confirm("Are sure for delete this ride")
        if(procede){
            const url = `https://desolate-stream-72668.herokuapp.com/orders/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                console.log(data);
                alert("User deleted")
                const remainingUser = myOrders.filter(user=> user._id !== id);
                setMyOrders(remainingUser)
            }
        })
        }
    }

    return (
        <Container>
            <Typography variant="h4" sx={{textAlign:'center',color:'primary.main',marginTop:3,marginBottom:3,fontWeight:'bold'}}>
                My Orders
            </Typography>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{fontWeight:'bold'}}>
                <TableRow>
                    <TableCell>SL.</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Delete Order</TableCell>
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
                    <TableCell>{row?.productName}</TableCell>
                    <TableCell>{row?.email}</TableCell>
                    <TableCell>$ {row?.productPrice}</TableCell>
                    <TableCell>{row?.address}</TableCell>
                    <TableCell>{row?.mobile}</TableCell>
                    <TableCell><Button onClick={()=>handleDelete(row._id)} variant="contained" sx={{background:"red"}}>Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;