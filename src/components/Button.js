import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className="btn"
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
