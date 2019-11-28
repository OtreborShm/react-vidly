import React from "react";

const Input = ({ name, icon, error, ...rest }) => {
  return (
    <div>
      <div className="wrap-input100 validate-input">
        <input {...rest} name={name} id={name} className="input100" />
        <span className="focus-input100"></span>
        <span className="symbol-input100">
          <i className={icon} aria-hidden="true"></i>
        </span>
      </div>
      <div style={{ height: 25 }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
