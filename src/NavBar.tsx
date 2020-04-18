import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import csk from "./logos/csk.svg";
import rcb from "./logos/rcb.svg";
import mi from "./logos/mi.svg";
import kp from "./logos/kp.svg";
import dc from "./logos/dc.svg";
import rr from "./logos/rr.svg";
import srh from "./logos/srh.svg";
import kkr from "./logos/kkr.svg";
class NavBar extends Component {
  render() {
    const teams = {
      rcb: {
        logo: rcb,
        name: "Royal Challengers Bangalore",
      },
      csk: {
        logo: csk,
        name: "Chennai Super Kings",
      },
      mi: {
        logo: mi,
        name: "Mumbai Indians",
      },
      kp: {
        logo: kp,
        name: "Kings XI Punjab",
      },
      dc: {
        logo: dc,
        name: "Delhi Capitals",
      },
      rr: {
        logo: rr,
        name: "Rajasthan Royals",
      },
      srh: {
        logo: srh,
        name: "Sunrisers Hyderabad",
      },
      kkr: {
        logo: kkr,
        name: "Kolkata Knight Riders",
      },
    };
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand style={{width:"100%"}}>
          <img
            alt=""
            src={teams.rcb.logo}
            width="75"
            height="75"
            className="d-inline-block align-top"
          />{" "}
          <span style={{ verticalAlign: "sub" }}>{teams.rcb.name}</span>
          <Form.Check style={{float:"right"}} type="checkbox" label="Dark Mode" />
        </Navbar.Brand>
        
      </Navbar>
      
    );
  }
}

export default NavBar;
