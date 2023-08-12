import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredvalue, setValue] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredvalue.trim() !== "";
  const nameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredvalue);

    setValue("");
    setEnteredNameIsTouched(false);
  };

  const formClasses = nameIsInvalid ? "form-control invalid" : "form-control";

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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
