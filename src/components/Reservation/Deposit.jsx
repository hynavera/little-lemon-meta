import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Deposit = () => {
  // const [payMethod, setPayMethod] = useState("");
  const [showPay, setShowPay] = useState(false);
  function handlePay(e) {
    // const {name, value} = e.target;
    // setPayMethod(prev => (
    //   {...prev, [name]: value}
    // ));
    setShowPay(!showPay);
  }
  return (
    <div className='page-body'>
      <h2>Pay A Deposit</h2>
      <div className="form-body">
        <p className='pay-rule'>According to Little Lemon’s rules, you have to pay a deposit to reserve a table at our place. This helps us perfect our preparations to serve our guests in the most respectful way.</p>
        <div className="pay-img">
          <img src="https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        <form action="" >
          <div className="form-group">
            <label htmlFor="pay">Select a payment method</label>
            <select name="pay" defaultValue={'def'} onChange={handlePay}>
              <option disabled value="def">Payment method</option>
              <option value="credit">Credit/Debit card</option>
              <option value="bank" disabled>Bank account</option>
              <option value="paypal" disabled>PayPal/Google Pay/Apple Pay</option>
            </select>
          </div>
          {!showPay ? (<></>) : (
          <div className='pay-form'>
            <div className="form-group">
              <label htmlFor="card">Card number</label>
              <input name='card' type="tel"  maxLength="19"  placeholder="XXXX XXXX XXXX XXXX"/>
            </div>
            <div className="form-group">
              <label htmlFor="exp">Expiration date</label>
              <input name='exp' type="tel" maxLength="5" placeholder="MM/YY"/>
            </div>
            <div className="form-group">
              <label htmlFor="cvc">CVC/CVV</label>
              <input name='cvc' type="tel" maxLength="3" placeholder="***"/>
            </div>
          </div>
          )}
        </form>  
        <span className='pay-devider'></span>  
        <div className="deposit-cost"> 
          <div className="pay-cost">
            <h3>TOTAL DEPOSIT</h3>
            <h3>$ 20</h3>
          </div> 
          <p>Note: Deposit will be deducted from the bill.</p>
        </div>
        <Link to="/success">
          <button className='btn-yes'>Pay deposit</button>
        </Link>

      </div>
    </div>
  )
}

export default Deposit