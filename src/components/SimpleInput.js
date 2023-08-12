import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredvalue, setValue] = useState("");

  const setNameRef = useRef();

  const inputHandler = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredvalue);
    // const name = setNameRef.current.value;
    // console.log(name);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={setNameRef}
          type="text"
          id="name"
          onChange={inputHandler}
          value={enteredvalue}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
