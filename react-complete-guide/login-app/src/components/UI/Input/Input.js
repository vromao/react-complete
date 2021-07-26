import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  </>
  );
});

export default Input;