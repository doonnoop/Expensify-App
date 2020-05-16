import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/dashboard" activeClassName="is-selected" exact>
        Home Page
      </NavLink>
      <NavLink to="/create" activeClassName="is-selected">
        Create Expense
      </NavLink>
    </div>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDisptchToProps = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};

export default connect(null, mapDisptchToProps)(Header);
