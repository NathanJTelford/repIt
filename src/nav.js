import React from 'react';
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div className='nav-bar'>
    <div>
      <p id='logo-text'>RepIt</p>
    </div>
      <ul>
          <li>
              <Link to='/'>Gym</Link>
          </li>
          <li>
              <Link to='goals'>Goals</Link>
          </li>
          <li>
            <Link to='/stats'>Progress</Link>
          </li>
      </ul>
      <div className='user-icon'>

      </div>
    </div>
  )
}
