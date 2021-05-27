import React, { createRef } from 'react'
import { NavLink } from "react-router-dom"
import PublicMenu from '../Molecules/PublicMenu';
import PrivateMenu from '../Molecules/PrivateMenu';

const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show')

const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <NavLink to="/">
          <img
            src="data:image/png;base64,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"
            alt="EDlogo"
            className="main-logo"
          />
        </NavLink>
      </div>
      <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
        <nav className="main-menu" ref={menu}>
          {
            localStorage.getItem('token') ?
            <PrivateMenu /> :
            <PublicMenu />
          }
        </nav>
        <div
          className="main-menu-toggle to-l"
          onClick={() => toggleMenu()}
        >
        </div>
      </div>
    </div>
  </header>
)


export default Header
