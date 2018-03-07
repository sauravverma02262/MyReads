import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { title, active } = props
  return (
    <div className="myread-header">
      <div className="logo">
        <Link to="/">{title}</Link>
      </div>
      <div className="navigation">
        <ul>
          {active !== 'add' &&
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>}
        </ul>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
