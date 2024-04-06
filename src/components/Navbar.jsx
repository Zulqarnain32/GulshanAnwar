

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNav = () => {
    setShowNavbar(false);
  };

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Allow scrolling
    }
  }, [showNavbar]);

  return (
    <div className="navbar-container">
      <div className="logo">
        <h4>Gulshan e Anwar</h4>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <GiHamburgerMenu className="hamburger" />
      </div>
      {showNavbar && <div className="overlay" onClick={closeNav}></div>} {/* Overlay when navbar is shown */}
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <RxCross2 className="close-nav" onClick={closeNav} />
        <Link to="/" className="nav-element" onClick={closeNav}>Home</Link>
        <Link to="/regular" className="nav-element" onClick={closeNav}>Regular</Link>
        <Link to="/sunday" className="nav-element" onClick={closeNav}>Sunday</Link>
        <Link to="/players" className="nav-element" onClick={closeNav}>Players</Link>
        {/* <Link to="/blog" className="nav-element" onClick={closeNav}>Match</Link> */}
        <Link to="/history" className="nav-element" onClick={closeNav}>History</Link>
        <Link to="/scorers" className="nav-element" onClick={closeNav}>Scorers</Link>
      </div>
    </div>
  );
};

export default Navbar;
