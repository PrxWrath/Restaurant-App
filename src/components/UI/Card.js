import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  
  const addedClasses = props.className;

  return (
    <div className={`${classes.card} ${addedClasses}`}>{props.children}</div>
  )
}

export default Card