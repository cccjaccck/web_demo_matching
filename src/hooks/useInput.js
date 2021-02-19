import { useState } from "react";

const useInput = (defaultValue, limit = 30) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.value.length <= limit) {
      setValue(e.target.value);
    }
  };

  return { value, onChange };
};

export default useInput;
