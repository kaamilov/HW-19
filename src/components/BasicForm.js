import { useRef, useState } from "react";

const BasicForm = (props) => {
  const basicReft = useRef();
  // console.log(basicReft);
  const [nameIsValue, setNameIsValue] = useState(true);
  const [name,setName]=useState()
  const [isTouched,setIsTouched]=useState(false)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredFirstName = basicReft.current.value;
    setNameIsValue(true)
    setIsTouched(true)
    if(enteredFirstName.trim().length < 3){
      setNameIsValue(false)
      setIsTouched(false)
      return;
    }
    // console.log(enteredFirstName);
  };
  const onBlurHandler =()=>{
    const enteredFirstName = basicReft.current.value;
    setNameIsValue(true)
    setIsTouched(true)
    if(enteredFirstName.trim().length < 3){
      setNameIsValue(false)
      setIsTouched(false)
      return;
    }
  }
  const onChangeHandler = (e)=>{
    const enteredFirstName = basicReft.current.value;
    setNameIsValue(true)
    setName(true)
    setIsTouched(true)
    if(enteredFirstName.trim().length < 3){
      setNameIsValue(false)
      setName(false)
      setIsTouched(false)
      return;
    }
  }
  const nameInputClasses = nameIsValue
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" /*onBlur={onBlurHandler}*/ ref={basicReft}/* onChange={onChangeHandler}*/ />
          {!nameIsValue && (<p className="error-text">Инпуттун значениеси 3 тамгадан коп болуш керек!</p>)}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" /* onBlur={onBlurHandler}*/ ref={basicReft} /*onChange={onChangeHandler} *//>
          {!nameIsValue && (<p className="error-text">Инпуттун значениеси 3 тамгадан коп болуш керек!</p>)}
        </div>
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" /*onBlur={onBlurHandler}*/ ref={basicReft} /*onChange={onChangeHandler}*//>
        {!nameIsValue && (<p className="error-text">Инпуттун значениеси 3 тамгадан коп болуш керек!</p>)}
      </div>
      <div className="form-actions">
        <button /*disabled={!isTouched}*/>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
