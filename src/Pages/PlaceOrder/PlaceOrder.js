import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import useAuth from './../../hooks/useAuth';
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const PlaceOrder = ({open,handleClose,details}) => {
  const {title,price} = details;
  const {user} = useAuth();
  const date = new Date();

    const initialInfo = { email: user.email }
    const [orderInfo,setOrderInfo] = React.useState(initialInfo);
 
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = {...orderInfo};
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo)
       
    }
    const handleSubmit = (e) =>{
      const appoinment = { 
        ...orderInfo,
        productName: title,
        productPrice: price,
        date: date.toLocaleDateString()
       }
   
           // send to the server
        fetch('https://desolate-stream-72668.herokuapp.com/orders', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(appoinment)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {

                swal("Successfully!! Place Order");
          
                  handleClose();
              }
          });
          e.preventDefault();
    }
  
    return (
        <React.Fragment>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style,textAlign:'center'}}>
          <Typography id="modal-modal-title" variant="h6" >
             {title}
           </Typography>
           <form onSubmit={handleSubmit}>
           <TextField
           disabled
           sx={{width:"80%",marginTop:3}}
           id="outlined-textarea"
           defaultValue={price}
           multiline
          />
           <TextField
           sx={{width:"80%",marginTop:3}}
           id="email"
           name="email"
           defaultValue={user?.email}
            multiline
          />
           <TextField
           sx={{width:"80%",marginTop:3}}
           id="outlined-textarea"
           name="age"
           onBlur={handleOnBlur}
            placeholder='Your age'
           multiline
          />
           <TextField
           sx={{width:"80%",marginTop:3,marginBottom:3}}
           id="outlined-textarea"
           name="address"
           onBlur={handleOnBlur}
          placeholder='Address'
           multiline
          />
           <TextField
           sx={{width:"80%",marginTop:3,marginBottom:3}}
           id="outlined-textarea"
           name="mobile"
           onBlur={handleOnBlur}
            placeholder='Mobile'
           multiline
          />
           
         
          <br/>
          <Button type="submit" variant='contained' sx={{marginRight:3}}> 
            Place Order
          </Button>
          <Button variant='contained' onClick={handleClose}>Close</Button>
           </form>
          </Box>
        </Modal>
      </React.Fragment>
    );
};

export default PlaceOrder;