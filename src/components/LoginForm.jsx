import React from "react";
import { NavLink } from "react-router-dom";
import Joi from "joi-browser";
import Tilt from "react-tilt";
import Form from "./common/form";
import logo from "../utils/simi-logo.png";
import "../css/login.css";
import "../css/utils.css";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="limiter">
        <div className="">
          <div className="wrap-login100">
            <Tilt
              className="Tilt login100-pic"
              options={{ scale: 1, max: 45 }}            >
              <img src={logo} alt="simi" draggable="false" />
            </Tilt>
            <form
              className="login100-form validate-form"
              onSubmit={this.handleOnSubmit}
            >
              <span className="login100-form-title">Productos POP</span>

              {this.renderInput("username", "fa fa-user", "Username")}
              {this.renderInput("password", "fa fa-lock", "Password", "password")}
              {this.renderButton("Login")}

              <div className="text-center p-t-12">
                <span className="txt1">Forgot </span>
                <NavLink className="txt2" to="/">
                  Username / Password?
                </NavLink>
              </div>

              <div className="text-center p-t-136">
                <NavLink className="txt2" to="/">
                  Create your account
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  ></i>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
