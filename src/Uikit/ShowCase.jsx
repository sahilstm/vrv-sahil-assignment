import React, { useState } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

const ShowCase = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="app">
    <Button text={'sas'} variant="outline"/>
    <Button text={'sas'} variant="dark-light"/>
    <Button text={'sas'} variant="light"/>
    <Button text={'sas'} variant="dark"/>
    <Button text={'sas'} variant="danger"/>
    <Button text={'sas'} variant="cancel"/>
      <h1>Input Component Variants</h1>

      <div className="input-demo">
        <h2>Small Input</h2>
        <Input
          label="Small Input"
          size="small"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Small input"
        />
      </div>

      <div className="input-demo">
        <h2>Medium Input</h2>
        <Input
          label="Medium Input"
          size="medium"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Medium input"
        />
      </div>

      <div className="input-demo">
        <h2>Large Input</h2>
        <Input
          label="Large Input"
          size="large"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Large input"
        />
      </div>
    </div>
  );
};

export default ShowCase;
