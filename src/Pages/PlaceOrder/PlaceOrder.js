import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

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

const PlaceOrder = ({open,handleClose,topdrone}) => {
  const {title,price} = topdrone;

    // const initialInfo = { patientName: user.displayName, email: user.email }
    const [orderInfo,setOrderInfo] = React.useState({});

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newOrderInfo = {...orderInfo};
        newOrderInfo[field] = value;
        setOrderInfo(newOrderInfo)
       
    }
    const handleSubmit = (e) =>{
      const appointment = { ...orderInfo }
          fetch("http://localhost:5000/orders",{
            method: "POST",
            headers:{
              "content-type": "application.json"
            },
            body: JSON.stringify(appointment)
          })
          .then(res=> res.json())
          .then(data=>{
            if(data.insertedId){
              alert("Place Order Successfully..")
              handleClose();
            }
          })
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
           id="outlined-textarea"
           name="name"
           onBlur={handleOnBlur}
            placeholder='Your name'
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