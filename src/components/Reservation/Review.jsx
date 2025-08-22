import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const [reserveData, setReserveData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedReserveData = sessionStorage.getItem("dataReserve");
    if (storedReserveData) {
      setReserveData(JSON.parse(storedReserveData))
    }
    
    const storedUserData = sessionStorage.getItem("dataCustomer");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
  }, [])

  const navigate = useNavigate();
  function handleSubmit(e) {
    navigate("/reservations/4");
  }

  return (
    <div className="page-body">
    <h2 className='col'>Reservation Review</h2>
    <div className='form-body row'>
      <div className='form-layout row'>
      <div className="column-group col l-5 p-4">
        <div className="form-group">
          <label>Reservation details</label>
          <div className='details'>
            <ul>
              <li><strong>Date: </strong>{reserveData?.date}</li>
              <li><strong>Time: </strong>{reserveData?.time}</li>
              <li><strong>Number of dinners: </strong>{reserveData?.people}</li>
              <li><strong>Table style: </strong>{reserveData?.style}</li>
              <li><strong>Number of tables: </strong>{reserveData?.table}</li>
            </ul>
            <div className="edit-icon">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="column-group col l-0-1 l-5 p-4">
        <div className="form-group">
          <label >Contact info</label>
          <div className='details'>
            <ul>
              <li><strong>Name: </strong>{userData?.name}</li>
              <li><strong>Phone: </strong>{userData?.phone}</li>
              <li><strong>Email: </strong>{userData?.email}</li>
            </ul>
            <div className="edit-icon">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      </div>
        <button className='btn-yes' onClick={handleSubmit}>Pay deposit</button>
    </div>
  </div>

  )
}

export default Review