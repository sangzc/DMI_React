/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'mediumorchid',
    };
    return (
      <nav>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink exact to="/colors" activeStyle={activeStyle}>
          Add New
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
