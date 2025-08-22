import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState (
    {firstname: '', lastname: '', phone: '', email: ''}
  );

  function handleChange(e) {
    const {name, value} = e.target;
    setContact(prev => (
      {...prev, [name]: value}
    ))
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/reservations/3");
    const customerData = {
      name: [contact.firstname,' ', contact.lastname],
      phone: contact.phone,
      email: contact.email
    }
    sessionStorage.setItem("dataCustomer",JSON.stringify(customerData))
  }

  return (
    <div className="page-body">
    <h2 className='col'>Contact Information</h2>
    <form action="" className='form-body row' onSubmit={handleSubmit}>
      <div className='form-layout row'>
      <div className="column-group col l-4 p-4">
        <div className="form-group">
          <label htmlFor="firstname">First name</label>
          <input type="text" placeholder='Type here...' name='firstname' value={contact.firstname} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input type="text" placeholder='Type here...' name='lastname' value={contact.lastname} onChange={handleChange}/>
        </div>
      </div>
      <div className="column-group col l-0-1 l-4 p-4">
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="tel" placeholder='Type here...' name='phone' value={contact.phone} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (optional)</label>
          <input type="email" placeholder='Type here...' name='email' value={contact.email} onChange={handleChange}/>
        </div>
      </div>
      </div>
        <button className='btn-yes'>Continue</button>
    </form>
  </div>

  )
}

export default Contact