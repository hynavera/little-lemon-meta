import React from 'react'
import { Link } from 'react-router-dom';

const Congrats = () => {
  return (
    <div className='success-page'>
      <h1>Congrats!</h1>
      <div>
        <p>You have made a reservation successfully.</p>
        <b>No. #000001</b>
      </div>
      <div className="congrats-img">
        <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />
      </div>
      <h2>THANK YOU!</h2>
      <Link to="/">
        <button className='btn-yes'>Back to Home</button>
      </Link>
    </div>
  )
}

export default Congrats