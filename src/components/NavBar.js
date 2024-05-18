import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

export default function NavBar({ planets }) {

  const [isOpen, setIsOpen] = useState(false);

  // Clean up scrolling when mobile-menu is opened
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <header>
      <nav className='navbar'>
        <p>THE PLANETS</p>
        <div className='toggle-menu'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </div>
        <ul className={`nav-planets-list ${isOpen ? 'mobile-menu' : 'hidden'}`}>
        {/* <ul className='nav-planets-list hidden'> */}
{planets.map((planet, index) => (
  <li key={index}>
  <NavLink className='planet-link' to={`/planet/${planet.name}`}> {planet.name}</NavLink>
  {isOpen && (
    <p> &gt; </p>
  )}
  </li>
))}
</ul>
      </nav>
    </header>
  )
}
