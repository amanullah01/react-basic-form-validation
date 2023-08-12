import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredvalue, setValue] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredvalue.trim() !== "";
  const nameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.trim().includes("@");
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredvalue);
    console.log(enteredEmail);

    setValue("");
    setEmail("");
    setEnteredNameIsTouched(false);
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
          onChange={inputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredvalue}
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
