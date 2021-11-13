import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrder from '../User/MyOrder/MyOrder';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../User/Review/Review';
import Payment from '../User/Payment/Payment';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddProduct from './../Admin/AddProduct/AddProduct';
import ManageOrder from './../Admin/ManageOrder/ManageOrder';
import useAuth from './../../../hooks/useAuth';
import { useHistory}  from 'react-router-dom';

const drawerWidth = 240;

function Dashboard(props) {

  const {admin,logOut} = useAuth();
  const history = useHistory();
  const logOutUser = () =>{
    logOut(history);
  }
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      
      <Divider />
       <Box style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
       <Link style={{textDecoration:'none'}} to="/home"><Button color="inherit">Home</Button></Link>
      {!admin && <Box style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
      <Link to={`${url}`}><Button color="inherit">DashBoard Home</Button></Link>
      <Link to={`${url}/myorder`}><Button color="inherit">My Order</Button></Link>
      <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link>
      <Link to={`${url}/payment`}><Button color="inherit">Payment</Button></Link></Box>}
      
      {admin && <Box style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
      <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <Link to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
      <Link to={`${url}/manageOrder`}><Button color="inherit">Manage Order</Button></Link>
      </Box>}
      <Button onClick={logOutUser} color="inherit">Logout</Button>
       </Box>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
              <Switch>
                <Route exact path={path}>
                     <DashboardHome />
                </Route>
                <Route path={`${path}/myorder`}>
                     <MyOrder />
                </Route>
                <Route path={`${path}/review`}>
                     <Review />
                </Route>
                  
                <Route path={`${path}/payment`}>
                     <Payment />
                </Route>
                <Route path={`${path}/makeAdmin`}>
                     <MakeAdmin />
                </Route>
                <Route path={`${path}/addProduct`}>
                     <AddProduct />
                </Route>
                <Route path={`${path}/manageOrder`}>
                     <ManageOrder />
                </Route>
                  
             </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
