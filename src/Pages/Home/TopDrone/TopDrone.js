import * as React from 'react';
import { Grid, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';

const TopDrone = ({topdrone}) => {
    const {title,img,description,price} = topdrone;
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
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
                <Link to="/placeorder">
                <Button onClick={handleOpen} size="small">Buy Now</Button>
                </Link>
            </CardActions>
            <PlaceOrder 
            open={open}
            handleClose={handleClose}
            topdrone={topdrone}
            />
            </Card>
        </Grid>
        </>
    );
};

export default TopDrone;