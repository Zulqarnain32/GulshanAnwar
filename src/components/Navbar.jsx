import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const closeNav = () => {
    setShowNavbar(false)
  }

  return (
      <div className="navbar-container">
        <div className="logo">
          <h4>Gulshan e Anwar</h4>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu className = "hamburger"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <RxCross2 className = "close-nav" onClick = {closeNav}/>
              <Link to="/" className = "nav-element" onClick = {closeNav}>Home</Link>
              <Link to="/about" className = "nav-element" onClick = {closeNav}>Players</Link>
              <Link to="/blog" className = "nav-element" onClick = {closeNav}>Match</Link>
              <Link to="/projects" className = "nav-element" onClick = {closeNav}>Records</Link>            
        </div>
      </div>
  )
}

export default Navbar