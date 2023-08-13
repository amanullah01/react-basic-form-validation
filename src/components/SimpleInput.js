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

  const {
    value: enteredEmail,
    hasError: emailIsInvalid,
    isValid: enteredEmailIsValid,
    inputChangeHandler: emailInputHandler,
    inputBlurHandler: eamilInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    nameInputReset();

    emailInputReset();
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
          onBlur={eamilInputBlurHandler}
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
