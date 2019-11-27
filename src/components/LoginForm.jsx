import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import Tilt from "react-tilt";
import "../css/login.css";
import "../css/utils.css";
import logo from "../utils/simi-logo.png";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });

    console.log(result);

    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);

    this.setState({ errors: errors || {} });

    if (errors) return;

    // Call the server
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="limiter">
        <div className="">
          <div className="wrap-login100">
            <Tilt
              className="Tilt login100-pic"
              options={{ scale: 1.5, max: 90 }}
            >
              <img src={logo} alt="simi" draggable="false" />
            </Tilt>
            <form
              className="login100-form validate-form"
              onSubmit={this.handleOnSubmit}
            >
              <span class="login100-form-title">Productos POP</span>
              <Input
                name="username"
                icon="fa fa-user"
                value={account.username}
                onChange={this.handleChange}
                type="text"
                placeholder="Username"
                error={errors.username}
              />
              <Input
                name="password"
                icon="fa fa-lock"
                value={account.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
                error={errors.password}
              />

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">Login</button>
              </div>

              <div class="text-center p-t-12">
                <span class="txt1">Forgot </span>
                <a class="txt2" href="/">
                  Username / Password?
                </a>
              </div>

              <div class="text-center p-t-136">
                <a class="txt2" href="/">
                  Create your Account
                  <i
                    class="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
