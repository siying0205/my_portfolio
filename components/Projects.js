import React from 'react'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Latest Projects</h1>
      <div className='flex-container'>
        <div className='project'>
          <img src={require('../images/img1.jpg')} alt='project' />
          <div className='project-content'>
            <span className='pink'>WEB DESIGN</span>
            <h2>Website Design for Marketing Agency Startup</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
            <button>VIEW PROJECT</button>
          </div>
        </div>
        <div className='project'>
          <img className='left' src={require('../images/img1.jpg')} alt='project' />
          <div className='project-content right'>
            <span className='pink'>WEB DESIGN</span>
            <h2>Website Design for Marketing Agency Startup</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
            <button>VIEW PROJECT</button>
          </div>
        </div>
        <div className='project'>
          <img src={require('../images/img1.jpg')} alt='project' />
          <div className='project-content'>
            <span className='pink'>WEB DESIGN</span>
            <h2>Website Design for Marketing Agency Startup</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
            <button>VIEW PROJECT</button>
          </div>
        </div>
        <div className='project'>
          <img className='left' src={require('../images/img1.jpg')} alt='project' />
          <div className='project-content right'>
            <span className='pink'>WEB DESIGN</span>
            <h2>Website Design for Marketing Agency Startup</h2>
            <p>During my IT internship, I was able to gain valuable experience in a variety of areas related to information technology. One of my primary responsibilities was assisting the IT team with the maintenance and troubleshooting of computer hardware and software. </p>
            <button>VIEW PROJECT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
