import { useEffect } from "react";
import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const setNameRef = useRef();
  const [enteredvalue, setValue] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("name is valid");
    }
  }, [enteredNameIsValid]);

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);

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

  const nameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const formClasses = nameIsInvalid ? "form-control invalid" : "form-control";

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
        {nameIsInvalid && <p className="error-text">Name is required</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
