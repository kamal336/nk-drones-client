import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Drones from './Pages/Drones/Drones/Drones';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from "./context/AuthProvider";
import Register from './Pages/Authentication/Register/Register';
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Dashboard from "./Pages/DashBoard/Dashboard/Dashboard";


function App() {
  return (
    <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/dashboard">
           <Dashboard />
         </Route>
         <PrivateRoute path="/alldrones">
           <Drones />
         </PrivateRoute>
         <PrivateRoute path="/placeorder">
           <PlaceOrder />
         </PrivateRoute>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/register">
           <Register />
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
  );
}

export default App;
