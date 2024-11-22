import React from "react";
import "../../styles/button.scss";
const Button = ({
  text,
  icon,
  variant = "dark",
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`cms-button ${variant} ${className ?? ""} ${
        disabled ? "disabled" : ""
      } `}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {icon ? icon : null}
      {text}
    </button>
  );
};

export default Button;
