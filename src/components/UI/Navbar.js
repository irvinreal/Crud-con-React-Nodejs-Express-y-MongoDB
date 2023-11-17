import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import classes from './Navbar.module.css'

function Navbar() {
  let pathname = useLocation()
  let currentPathname = pathname.pathname
  return (
    <nav className={classes.navigation}>
      <span className={classes['span-crud']}>
        <img src='irvin.svg' alt='logo irvin' height={28} /> CRUD
      </span>
      <ul className={classes.ul}>
        {currentPathname === '/' ? (
          <li>{null}</li>
        ) : (
          <li>
            <Link to='/' className={classes.link}>
              Home page
            </Link>
          </li>
        )}

        {/*  */}
      </ul>
    </nav>
  )
}

export default Navbar
