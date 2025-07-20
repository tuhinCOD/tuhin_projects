import { useEffect, useRef } from "react";
import './Input.css';

function Input({ ...props}) {
  const focusInput = useRef();
  useEffect(() => {
    props.focus && focusInput.current.focus()
  },[]);  
  return (
    <>
        <label htmlFor={props.id} className={`form-label col-form-label${props.weight ? '-' + props.weight : ''} position-relative`}>
            <span>{props.label}</span>
            <div className={props.must ? 'must' : 'd-none'} ></div>
        </label>
        <input 
        ref={focusInput}
        className={`form-control ${props.weight ? 'form-control-' + props.weight : ''} shadow-none`}
        {...props}/>
        <div className="form-text text-danger fw-bold" style={{fontSize: 10 + 'px'}}>{props.err}</div>
    </>
  )
};

export default Input;