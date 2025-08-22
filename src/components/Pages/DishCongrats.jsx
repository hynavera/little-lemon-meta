import React from 'react'
import { Link } from 'react-router-dom';

const DishCongrats = () => {
  return (
    <div className='success-page'>
      <h1>Thank you for your order!</h1>
      <div>
        <p>We are preparing your food, you will receive it later.</p>
        <b>Order No. #000001</b>
      </div>
      <div className="congrats-img">
        <img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg" alt="" />
      </div>
      <Link to="/">
        <button className='btn-yes'>Back to Home</button>
      </Link>
    </div>
  )
}

export default DishCongrats