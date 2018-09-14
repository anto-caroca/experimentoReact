import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Profile';
import Wall from './../Pages/Wall';
import './styles.css';
import Login from './../Pages/Login';

const Inicio = () => (
  <Router>
    <div>
      <Link to="/" className="link">Login</Link>
      <Link to="/profile" className="link">Profile</Link>
      <Link to="/wall" className="link">wall</Link>
      <Route exact path="/" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/wall" component={Wall} />
    </div>
  </Router>
);



export default Inicio;