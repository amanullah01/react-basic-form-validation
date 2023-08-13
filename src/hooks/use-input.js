import { useState } from "react";

const useInput = (validate) => {
  const [enteredInput, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validate(enteredInput);
  const inputIsInvalid = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    value: enteredInput,
    hasError: inputIsInvalid,
    isValid: inputIsValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
