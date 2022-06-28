import { useState } from "react";

import useValidation from "./useValidation";

const useInput = (initialState: string, type: string) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, type);

  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  const onBlur = (evt: any) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
