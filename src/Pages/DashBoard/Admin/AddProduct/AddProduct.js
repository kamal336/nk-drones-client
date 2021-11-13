import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Typography,Container } from '@mui/material';
import swal from 'sweetalert';

const AddProduct = () => {

    const [addProduct,setAddProduct] = React.useState({});


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        newProduct[field] = value;
        setAddProduct(newProduct);
    }
    const handleSubmit = (e) =>{

           // send to the server
        fetch('https://desolate-stream-72668.herokuapp.com/addproduct', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(addProduct)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {

                swal("Successfully!! Product Added");
                e.target.reset();
              }
          });
          e.preventDefault();
    }
    return (
        <Container sx={{textAlign:'center'}}>
        <Typography variant="h4" >
           Add a Product
         </Typography>
         <form onSubmit={handleSubmit}>
         <TextField
         sx={{width:"80%",marginTop:3}}
         id="productName"
         name="title"
         onBlur={handleOnBlur}
         placeholder='Product name'
         multiline
        />
         <TextField
         sx={{width:"80%",marginTop:3}}
         id="price"
         name="price"
         onBlur={handleOnBlur}
         placeholder='Price'
          multiline
        />
         <TextField
         sx={{width:"80%",marginTop:3}}
         id="img"
         name="img"
         onBlur={handleOnBlur}
        placeholder='Image URL'
         multiline
        />
         <TextField
         sx={{width:"80%",marginTop:3,marginBottom:3}}
         id="description"
         name="description"
         onBlur={handleOnBlur}
         placeholder='Description'
         rows={4}
         multiline
        />
         
       
        <br/>
        <Button type="submit" variant='contained' sx={{marginRight:3}}> 
          Add Product
        </Button>
         </form>
        </Container>
    );
};

export default AddProduct;