import React from "react";
import { ReactComponent as SearchIcon } from "../../assests/svg/search-icon.svg";
import "../../styles/input.scss";
import { IoMdMail, IoMdLock, IoMdPerson } from "react-icons/io";

const Input = ({
  type,
  name, 
  value,
  onChange, 
  placeholder,
  searchIcon,
  mailIcon,
  passwordIcon,
  personIcon,
  className,
  variant,
}) => {
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <input
          type={type}
          name={name} 
          value={value}
          onChange={onChange}
          className={`search-input ${variant} ${className ?? ""}`}
          placeholder={placeholder}
        />

        {searchIcon && <SearchIcon className="search-icon" />}
        {mailIcon && <IoMdMail className="input-icon" />}
        {passwordIcon && <IoMdLock className="input-icon" />}
        {personIcon && <IoMdPerson className="input-icon" />}
      </div>
    </div>
  );
};

export default Input;
