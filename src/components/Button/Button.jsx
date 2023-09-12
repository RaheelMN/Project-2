import React from 'react'
import styles from './Button.module.css'
const Button = ({isoutline,icon,text,...rest}) => {
  {console.log(rest)}

  return (
    <button 
      {...rest}
      className={isoutline ? styles.outline_btn: styles.primary_btn}>
      {icon}
      {text}
      </button>    
  )
}

export default Button