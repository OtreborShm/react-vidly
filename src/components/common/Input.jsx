import React from "react";

const Input = ({ name, icon, error, ...rest }) => {
  return (
    <div className="wrap-input100 validate-input">
      <input {...rest} name={name} id={name} className="input100" />
      <span className="focus-input100"></span>
      <span className="symbol-input100">
        <i className={icon} aria-hidden="true"></i>
      </span>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Input;
