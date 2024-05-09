import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({ planets }) {

  return (
    <header>
      <nav className='navbar'>
        <p>THE PLANETS</p>
        <ul className='nav-planets-list'>
{planets.map((planet, index) => (
  <li key={index}>
  <NavLink className='planet-link' to={`/planet/${planet.name}`}> {planet.name}</NavLink>
  </li>
))}
</ul>
      </nav>
    </header>
  )
}
