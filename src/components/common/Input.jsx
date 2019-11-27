import React from "react";

const Input = ({ name, icon, value, error, onChange, type, placeholder }) => {
  return (
    <div className="wrap-input100 validate-input">
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input100"
      />
      <span class="focus-input100"></span>
      <span class="symbol-input100">
        <i class={icon} aria-hidden="true"></i>
      </span>
      {error && <p Style="color:red">{error}</p>}
    </div>
  );
};

export default Input;
