import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Drones from './Pages/Drones/Drones/Drones';
import Login from './Pages/Authentication/Login/Login';


function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/alldrones">
           <Drones />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
