import React from 'react'

const Icon = (props) => {
  const { icon, classes } = props
 
  return (
    <span>
      <img className={classes} src={icon} alt={icon} />
    </span>
  )
}

export default Icon