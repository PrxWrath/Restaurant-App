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
            defaultValue={props.value}
            placeholder={props.placeholder}
            max={props.max}
            min={props.min}
            onChange={(e)=>{props.setQty(e.currentTarget.value)}}
        />
    </div>
  )
}

export default FormInput