import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control</p>
        <button onClick={startLogin} className="button">
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDisptchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(null, mapDisptchToProps)(Login);