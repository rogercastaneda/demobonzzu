import React from 'react'
import css from './Button.module.css'

const Button = ({url, title}) => {
  return (
    <a href={url} className={css.link}>{title}</a>
  )
}

export default Button