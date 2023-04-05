import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <h1>Contact Me</h1>
        <div className='email'>
          <img src={require('../images/logo.png')} alt="email logo" />
          <div className='email-content'>
            <h2>EMAIL</h2>
            <p>qiansy0205@gmail.com</p>
          </div>
        </div>
        <div className='phone'>
          <img src={require('../images/logo.png')} alt="phone logo" />
          <div className='phone-content'>
            <h2>PHONE</h2>
            <p>(+61)0423858796</p>
          </div>
        </div>
      </div>
      <img src={require('../images/img1.jpg')} alt="me" />
    </div>
  )
}

export default Contact
