import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredvalue, setValue] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const setNameRef = useRef();

  const inputHandler = (event) => {
    setValue(event.target.value);
    if (enteredvalue.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredvalue.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredvalue);
    // const name = setNameRef.current.value;
    // console.log(name);
    setValue("");
  };

  const formClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={setNameRef}
          type="text"
          id="name"
          onChange={inputHandler}
          value={enteredvalue}
        />
        {!enteredNameIsValid && <p className="error-text">Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
