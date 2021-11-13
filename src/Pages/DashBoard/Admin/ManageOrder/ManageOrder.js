import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const ManageOrder = () => {

    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])
    
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
              const remainingUser = orders.filter(user=> user._id !== id);
              setOrders(remainingUser)
          }
      })
      }
  }
    return (
        <div>
        <Typography variant="h4" sx={{textAlign:'center',color:'primary.main',marginTop:3,marginBottom:3,fontWeight:'bold'}}>
                Manage Orders
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
           <StyledTableCell align="left">Sl.</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Mobile</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Delete User</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row,index) => (
            <StyledTableRow key={row.name}>
                 <StyledTableCell align="left">{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.address}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.mobile}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <TableCell><Button onClick={()=>handleDelete(row._id)} variant="contained" sx={{background:"red"}}>Delete</Button></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrder;