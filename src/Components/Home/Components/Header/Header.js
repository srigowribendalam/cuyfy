import React  from "react";
import { Button} from "antd";

import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {


  return (
    <>
      <div className="Headerbody">
        <div className="HeaderlogoContainer" >
          <img src={require("../../../../Assets/Home/logomain.png")} alt="Logo" />
        </div>
        <div className="HeaderFields">
          <NavLink className="navbar-item" exact={true}  activeClassName="is-active" to="/">Home</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/OurServices">Our Services</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active"  to="/About">About</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active"  to="/PricingPage">Pricing</NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/ContactPage">Contact Us</NavLink>
          <Button className="Header-Login">
            Login
          </Button>
        </div>
      </div>
     
    </>
  );
};

export default Header;
