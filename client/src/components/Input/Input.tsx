import React, { FC } from "react";

import "./input.scss";

interface InputProps {
  options: {
    isDirty: boolean;
    isValid: boolean;
    value: string;
    onChange: (evt: any) => void;
    onBlur: (evt: any) => void;
  };
  placeholder: string;
  type: string;
  name: string;
  errorMessage: string;
}

const Input: FC<InputProps> = ({
  options,
  errorMessage,
  type,
  name,
  placeholder,
}) => {
  return (
    <div>
      <input
        className="input"
        value={options.value}
        onChange={options.onChange}
        onBlur={options.onBlur}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
      {options.isDirty && !options.isValid && (
        <p className="error_message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
