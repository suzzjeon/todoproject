import { useState } from "react";

const useInput = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    if (e === "") setInputValue("");
    else setInputValue(e.target.value);
  };

  return [inputValue, onChange];
};

export default useInput;
