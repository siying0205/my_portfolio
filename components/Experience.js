import React from 'react'

const Experience = () => {
  return (
    <div className='experience'>
      <h1>My Work Experience</h1>
      <div className="grid-experience">
        <div className="job-experience one">
          <img src={require('../images/img1.jpg')} alt='icon' />
          <div className="experience-content">
            <h2>Web Developer</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
          </div>
        </div>

        <div className="job-experience two">
          <img src={require('../images/img1.jpg')} alt='icon' />
          <div className="experience-content">
            <h2>Front-end Developer</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
