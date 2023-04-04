import React from 'react'
import Photo from '../images/img1.jpg'

const Introduction = () => {
  return (
    <div className='introduction'>
      <div className="grid-introduction">
        <img className='photo' src={Photo} alt='my_photo' />
        <div className="intro">
          <h1>I'm a Recent Graduate with Web Development Experience, Currently Seeking Employment.</h1>
          <p>I'm a recent graduate with solid skills in HTML, CSS, and JavaScript programming, and experience using
            React to build great user interfaces. I'm able to implement designs through code, collaborate with teams, and
            solve problems. I'm eager to join a challenging team and continue learning while creating exceptional user
            experiences.</p>
          <div className="button">
            <button className='contact'>CONTACT ME</button>
            <button className='portfolio'>PORTFOLIO</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
