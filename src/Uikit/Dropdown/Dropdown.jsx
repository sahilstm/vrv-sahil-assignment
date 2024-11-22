import React from "react";
import PropTypes from "prop-types";
import "../../styles/dropdown.scss";
const Dropdown = ({ options, value, onChange, placeholder, disabled }) => {
  return (
    <div className={`dropdown ${disabled ? "disabled" : ""}`}>
      <select
        value={value}
        onChange={(e) => !disabled && onChange(e.target.value)}
        disabled={disabled} 
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  value: "",
  placeholder: "Select an option",
  disabled: false,
};

export default Dropdown;