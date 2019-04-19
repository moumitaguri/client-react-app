import React, { Component } from "react";
import "./App.css";
export default class User extends Component {
  render() {
    return (
      <div>
        <form action="/addUser" method="POST" className="input-section">
          <input type="text" name="username" />
          <input type="submit" value="Add user" />
        </form>
      </div>
    );
  }
}
