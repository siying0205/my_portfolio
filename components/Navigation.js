import React from 'react'

const Navigation = () => {
  return (
    <div className='navBar'>
      <div className='logo '>
        <img src={require('../images/logo.png')} alt='logo' />
        <h1>ALYSON</h1>
      </div>

      <div className='nav'>
        <span className="material-symbols-outlined">
          menu
        </span>
        <ul className='navContent'>
          <li className='clicked'>HOME</li>
          <li>EXPERIENCE</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>

      <div className='contact-btn'>CONTACT NOW</div>
    </div>
  )
}

export default Navigation
