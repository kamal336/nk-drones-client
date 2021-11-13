import { Box } from '@mui/system';
import React from 'react';
import  Typography  from '@mui/material/Typography';

const DashboardHome = () => {
    return (
        <Box>
            <Typography variant="h3"  sx={{textAlign:'center',color:'primary.main',fontWeight:'bold'}}>This is Our Wonderfull Dashboard</Typography>
        </Box>
    );
};

export default DashboardHome;