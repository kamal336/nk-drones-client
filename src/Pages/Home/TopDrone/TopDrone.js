import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const TopDrone = ({topdrone,open,handleOpen,handleClose}) => {
    const {title,img,description,price} = topdrone;

    return (
        <Grid item sm={12} md={4}>
          <Card>
            <CardMedia
                component="img"
                height="160"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
               {description}
                </Typography>
                <Typography variant="h6">
                    Price: {price} $
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/">
                <Button onClick={handleOpen} size="small">Buy Now</Button>
                </Link>
            </CardActions>
            </Card>
            <PlaceOrder 
             handleClose={handleClose}
             open={open}
             topdrone={topdrone}
            />
        </Grid>
    );
};

export default TopDrone;