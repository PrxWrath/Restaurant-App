import React from 'react'
import classes from "./Overlay.module.css"
import ReactDOM from "react-dom";

const BackDrop = () =>{
    return(
        <div className={classes.backdrop}></div>
    )
}
const Popup = (props) => {
    return(
        <div className={classes.popup}>{props.children}</div>
        
    )
}
const Overlay = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop/>, document.getElementById("cart-overlay"))}
        {ReactDOM.createPortal(<Popup>{props.children}</Popup>, document.getElementById("cart-overlay"))}
    </React.Fragment>
  )
}

export default Overlay