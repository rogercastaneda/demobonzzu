import React from 'react'

const Button = ({url, title}) => {
  return (
    <a href={url}>{title}</a>
  )
}

export default Button