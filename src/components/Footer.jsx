import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-light w-100 d-flex flex-column justify-content-center'>
      <div className='row p-5'>
        <div className='col'>
          <h4>Media Player 2024  </h4>
            <p style={{ textAlign: "justify" }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
            </p>
            </div>
        <div className='col'>
          <h4>Links</h4>
          <Link to={'/'} style={{color:'black'}}>Landing</Link><br />
           <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link><br />
          <Link to={'/his'} style={{color:'black'}}>History</Link><br />

          </div> 
      <div className='col'>
      <h4>References</h4>
      <a href="https://getbootstrap.com/" target ='_blank' style={{color:"black"}}> Bootstrap</a><br />
        <a href="https://react-bootstrap.netlify.app/" target ='_blank' style={{color:"black"}}> React Bootstrap</a><br />
       <a href="https://react.dev/" target ='_blank' style={{color:"black"}}>React</a>
      </div>
    </div>
    <div className='text-center'>
      <p>&copy;Media player 2024</p>
       
    </div>
    </div>
  )
}

export default Footer