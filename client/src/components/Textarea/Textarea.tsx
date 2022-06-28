import React, { FC } from "react";

import "./textarea.scss";

interface TextareaProps {
  options: {
    isDirty: boolean;
    isValid: boolean;
    value: string;
    onChange: (evt: any) => void;
    onBlur: (evt: any) => void;
  };
  placeholder: string;
  name: string;
  errorMessage: string;
}

const Textarea: FC<TextareaProps> = ({
  options,
  errorMessage,
  name,
  placeholder,
}) => {
  return (
    <div>
      <textarea
        className="textarea"
        value={options.value}
        onChange={options.onChange}
        onBlur={options.onBlur}
        name={name}
        placeholder={placeholder}
        required
      ></textarea>
      {options.isDirty && !options.isValid && (
        <p className="error_message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Textarea;
