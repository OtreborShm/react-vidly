import React from "react";

const Button = ({ label, validation }) => {
  return (
    <div className="container-login100-form-btn">
      <button disabled={validation} className="login100-form-btn">
        {label}
      </button>
    </div>
  );
};

export default Button;
