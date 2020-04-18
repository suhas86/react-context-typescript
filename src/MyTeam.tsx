import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./MyTeam.css";
class MyTeam extends Component {
  render() {
    return (
      <div className="my-team">
        <Form.Label>Who is the captain</Form.Label>
        <Form.Control className="select-dd" as="select">
          <option>Royal Challengers Bangalore</option>
          <option>Chennai Super Kings</option>
          <option>Delhi Capitals</option>
          <option>Kings XI Punjab</option>
          <option>Kolkata Knight Riders</option>
          <option>Mumbai Indians</option>
          <option>Rajasthan Royals</option>
          <option>Sunrisers Hyderabad</option>
        </Form.Control>
        <h1>Captain of the team is: Virat Kohli</h1>
        <h4>Home Ground: M. Chinnaswamy Stadium</h4>
        <h5>Owner: United Spirits</h5>
      </div>
    );
  }
}
export default MyTeam;
