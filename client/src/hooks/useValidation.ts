import { useEffect, useState } from "react";

import {
  DATE_REG_EXP,
  EMAIL_REG_EXP,
  FULLNAME_REG_EXP,
  MESSAGE_REG_EXP,
  PHONE_NUMBER_REG_EXP,
} from "../constants";

const useValidation = (value: string, type: string) => {
  const [isValid, setIsValid] = useState(false);

  let regExp: RegExp = new RegExp("[\\s\\S]*");
  useEffect(() => {
    switch (type) {
      case "fullName":
        regExp = new RegExp(FULLNAME_REG_EXP);
        break;
      case "email":
        regExp = new RegExp(EMAIL_REG_EXP);
        break;
      case "phoneNumber":
        regExp = new RegExp(PHONE_NUMBER_REG_EXP);
        break;
      case "birthday":
        if (new Date(value) > new Date()) {
          setIsValid(false);
          return;
        }
        regExp = new RegExp(DATE_REG_EXP);
        break;
      case "message":
        regExp = new RegExp(MESSAGE_REG_EXP);
        break;
    }

    regExp.test(String(value)) ? setIsValid(true) : setIsValid(false);
  }, [value]);

  return {
    isValid,
  };
};

export default useValidation;
