import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [nameIsValue, setNameIsValue] = useState(true);
  const [name, setName] = useState();
  const [isTouched, setIsTouched] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const enteredName = nameInputRef.current.value;
    // setNameIsValue(true);
    // isTouched(true)
    // if (enteredName.trim().length < 3) {
    //   setNameIsValue(false);
    //   isTouched(false)
    //   return;
    // }
    // console.log(enteredName);
    // nameInputRef.current.value = " ";
  };
  const onBlurHandler = () => {
    const enteredName = nameInputRef.current.value;
    setNameIsValue(true);
    setIsTouched(true);
    if (enteredName.trim().length < 3) {
      setNameIsValue(false);
      isTouched(false);
      return;
    }
  };
  const onChangeHandler = (e) => {
    setName(e.target.value);
    setNameIsValue(true);
    setIsTouched(true);
    const enteredName = nameInputRef.current.value;
    if (enteredName.trim().length < 3) {
      setNameIsValue(false);
      setIsTouched(false);
      return;
    }
  };
  const nameInputClasses = nameIsValue
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValue && (
          <p className="error-text">Name should be more 3 cgaracters</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
