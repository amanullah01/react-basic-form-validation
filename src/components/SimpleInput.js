import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameIsInvalid,
    isValid: enteredNameIsValid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.trim().includes("@");
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailIsTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();

    setEmail("");
    setEnteredEmailIsTouched(false);
  };

  const formClasses = nameIsInvalid ? "form-control invalid" : "form-control";
  const emailFformClasses = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameIsInvalid && <p className="error-text">Name is required</p>}
      </div>

      <div className={emailFformClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && <p className="error-text">Email is required</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
