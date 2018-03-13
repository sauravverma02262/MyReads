import React from 'react'
import { Link } from 'react-router-dom'
import Icons from './Icon'
import Add from '../Images/Add.svg'
import PropTypes from 'prop-types'

const Header = (props) => {
  
  const { title, menu } = props
  return (
    <div className="myread-header">
      <div className="logo">
        <Link to="/">{title}</Link>
      </div>
    {menu && 
      <div className="navigation">
          <ul>
            <li>
              <Link to="/search">
                <Icons icon={Add} classes="add-book" />
              </Link>
            </li>
          </ul>
        </div>
    }
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
