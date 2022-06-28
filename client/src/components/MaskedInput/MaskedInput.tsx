import React, { FC } from "react";
import InputMask from "react-input-mask";

import "./maskedInput.scss";

interface MaskedInputProps {
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
  mask: string;
}

const MaskedInput: FC<MaskedInputProps> = ({
  options,
  errorMessage,
  type,
  name,
  placeholder,
  mask,
}) => {
  return (
    <div>
      <InputMask
        className="input"
        mask={mask}
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

export default MaskedInput;
