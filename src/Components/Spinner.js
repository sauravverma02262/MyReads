import React from 'react'
import '../Stylesheets/Spinner.css'
import PropTypes from 'prop-types'

const Spinner = (props) => {
  const {size} = props
  return (
    <div className={"spinner "+ size}></div>
  )
}
Spinner.propTypes = {
  size: PropTypes.string
}

export default Spinner