import React from 'react';
import "./Reserve.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Reserve = () => {
  const navigate = useNavigate();
  const [reservation, setReservation] = useState(
    {date: "", time: "", dinners: '', style: '', tables: '' }
  );
  function handleChange(e) {
    const {name, value} = e.target;
    setReservation(prev => (
      {...prev, [name]: value}
    ));
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/reservations/2");
    const reserveData = {
      date: reservation.date,
      time: reservation.time,
      people: reservation.dinners,
      style: reservation.style,
      table: reservation.tables
    }
    sessionStorage.setItem("dataReserve",JSON.stringify(reserveData))

  }
  
  return (
    <div>
      <div className="page-body">
        <h2 className='col'>Reserve Tables</h2>
        <form action="" className='form-body row' onSubmit={handleSubmit}>
          <div className='form-layout row'>
          <div className="column-group col l-4 p-4">
            <div className="form-group">
              <label htmlFor="date">Select a day</label>
              <input type="date" name='date' value={reservation.date} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="time">Select a time</label>
              <input type="time" name='time' value={reservation.time} onChange={handleChange}/>
            </div>
          </div>
          <div className="column-group col l-0-1 l-4 p-4">
            <div className="form-group">
              <label htmlFor="dinners">Number of dinners</label>
              <input type="number" placeholder='Type a number here...'
                name='dinners' value={reservation.dinners} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="style">Table style</label>
              <select name='style' value={reservation.style} onChange={handleChange}>
                <option>Select a table style</option>
                <option value="Dining">Dining: for over 8 people each table</option>
                <option value="Common">Common: for 4 - 8 people each table</option>
                <option value="Outdoor">Outdoor: for 2 - 4 people each table</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="tables">Number of tables (optional)</label>
              <input type="tel" placeholder='Type a number here...'
                name='tables' maxLength={2} value={reservation.tables} onChange={handleChange}
              />
            </div>
          </div>
          </div>
            <button className='btn-yes'>Continue</button>
        </form>
      </div>


    </div>
  )
}

export default Reserve