import React from 'react'
import classes from './FormInput.module.css'
const FormInput = (props) => {
  const addedClasses = props.className
  return (
    <div className={`${classes.formInput} ${addedClasses}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
            type={props.type}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            max={props.max}
            min={props.min}
        />
    </div>
  )
}

export default FormInput