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
         <PrivateRoute path="/alldrones">
           <Drones />
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
