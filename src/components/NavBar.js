import React from 'react'

export default function NavBar({ planets }) {

  return (
    <header>
      <nav className='navbar'>
        <p>THE PLANETS</p>
        <ul className='nav-planets-list'>
{planets.map((planet, index) => (
  <li key={index}>{planet.name}</li>
))}
</ul>
      </nav>
    </header>
  )
}
