import React from 'react'
import { Link } from 'react-router-dom';

const Congrats = () => {
  return (
    <div className='success-page'>
      <h1>Congrats!</h1>
      <div>
        <h3>You have made a reservation successfully.</h3>
        <p>No. #000001</p>
      </div>
      <div className="congrats-img">
        <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />
      </div>
      <h3>THANK YOU!</h3>
      <Link to="/">
        <button className='btn-yes'>Back to Home</button>
      </Link>
    </div>
  )
}

export default Congrats