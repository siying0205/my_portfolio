import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
      <h1>My Skills</h1>
      <div className="grid-box">
        <div className="grid-skills">
          <div className="grid-item darkgreen">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>HTML</p>
          </div>
          <div className="grid-item orange">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>CSS</p>
          </div>
          <div className="grid-item pink">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>React JS</p>
          </div>
          <div className="grid-item blue">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>JavaScript</p>
          </div>
          <div className="grid-item green">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>Github</p>
          </div>
          <div className="grid-item purple">
            <img src={require('../images/logo.png')} alt="icon" />
            <p>Nodejs</p>
          </div>


        </div>

        <img className='skills-photo' src={require('../images/img1.jpg')} alt="" />
      </div>
    </div>
  )
}

export default Skills
