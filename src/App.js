import React from 'react';
import logo from './logo.svg';
import {Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import NavBar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login';
import NotFound from './Components/notfound';
import EmployeeList from './Components/employeeList';
import Dashboard from './Components/dashboard';


function App() {
  return (
    <React.Fragment>
    <NavBar />
      <div className="container">
        <Switch>
        <Route path="/" exact render={props=> <Login {...props}></Login>}></Route>
        <Route path="/login"  render={props=> <Login {...props}></Login>}></Route>
        <Route path="/employeeList"  render={()=> <EmployeeList></EmployeeList>}></Route>
        <Route path="/dashboard" render={()=> <Dashboard/>}></Route>
        <Route path="/not-found" render={()=><NotFound></NotFound>}></Route>
        <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
      </React.Fragment>
  );
}

export default App;
