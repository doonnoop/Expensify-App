import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="is-selected" exact>
        Home Page
      </NavLink>
      <NavLink to="/create" activeClassName="is-selected">
        Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-selected">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
