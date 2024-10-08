import React from "react"
const Button = (props) => {
    return (
        <a href={props.url}
              className={props.styleClass}>
              {props.btnText}
        </a>
    )
}

export default Button