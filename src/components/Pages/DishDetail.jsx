import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const DishDetail = () => {
  const params = useParams();
  const [dish, setDish] = useState();

  useEffect(() => {
    fetch(`/api/dishes/${params.id}`)
    .then(res => res.json())
    .then(data => setDish(data.dishes))
  }, [params.id])

  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const [selectedAddOn, setSelectedAddOn] = useState(
    {price: 0, name: ""}
  );
  const handleAddOnChange = (price, name) => {
    setSelectedAddOn({ price, name });
  }; 

  const location = useLocation()
  const search = location.state?.search || ""
  
  // ORDER FORM
  const [contact, setContact] = useState (
    {name: '', address: '', phone: ''}
  );
  function handleChange(e) {
    const {name, value} = e.target;
    setContact(prev => (
      {...prev, [name]: value}
    ))
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <div className="page-head">
      <h1>Order Online</h1>
    </div>
    <div className="page-body">
      <div className='col'>
        <h3>ORDER FOR DELIVERY!</h3> <br />
      </div>
      <div className='col'>
        <Link to={`..${search}`}
          relative='path'
          className="back-button">
          &larr; <span>Back to All Menu</span>
        </Link>
      </div>
      <div className='order-layout row'>
        {dish ? (
          <div className='order-dish col l-6 p-4'>
            <div className='order-dish-info'>
              <div className="card-img">
                <img src={dish.image}/>
              </div>
              <div className='dish-info'>
                <h2>{dish.name}</h2>
                <h3 style={{display: "flex", gap: "5px", alignItems: "baseline", color: "var(--Accent-2"}}><p>$</p>{dish.price}</h3>
                <div>
                  <br />
                  <p>{dish.description}</p>
                  <br />
                  <p>The meal is including:</p>
                  <ul style={{paddingLeft: "5%", fontSize: "18px", lineHeight: "2"}}>
                    <li>{dish.include[0]}</li>
                    <li>{dish.include[1]}</li>
                    <li>{dish.include[2]}</li>
                  </ul>
                </div>
              </div>
            </div>
              <div className="dish-custo">
                <h3>Quantity</h3>
                <div className='order-qty'>
                  <button onClick={handleDecrease}>-</button>
                  <div className='qty-num'>{quantity}</div>
                  <button onClick={handleIncrease}>+</button>
                </div>
                <br />
                <h3>Add</h3>
                <table>
                  <tbody>
                  <tr>
                    <td>Feta</td>
                    <td>$ 1.00</td>
                    <td>
                      <input type="radio" name='add' onChange={() => handleAddOnChange(1, "Feta")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Parmesan</td>
                    <td>$ 1.50</td>
                    <td>
                      <input type="radio" name='add' onChange={() => handleAddOnChange(1.5, "Parmesan")}
                      /> 
                    </td>
                  </tr>
                  <tr>
                    <td>Dressing</td>
                    <td>$ 2.00</td>
                    <td>
                      <input type="radio" name='add' onChange={() => handleAddOnChange(2, "Dressing")}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>No adding</td>
                    <td>$ 0</td>
                    <td>
                      <input type="radio" name='add' defaultChecked onChange={() => handleAddOnChange(0, "")}
                      />
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br />
                <div className="order-total">
                  <h3>Subtotal ($)</h3>
                  <div>{(quantity * dish.price + selectedAddOn.price).toFixed(2)}</div>
                </div>
              </div>
            </div>   
          ) : ""}
        <div className='order-delivery col l-0-1 l-5 p-4'>
          <div className="order-form">
            <form action="" className='form-body row' onSubmit={handleSubmit}>
              <div className='form-layout row'>
              <div className="column-group col l-12 p-4">
                  <h3>ADD YOUR INFO</h3>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Type here...' name='name' value={contact.name} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder='Type here...' name='address' value={contact.address} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" placeholder='Type here...' name='phone' value={contact.phone} onChange={handleChange}/>
                  </div>
                  <br />
                  <h3>ADD YOUR PAYMENT</h3>
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
              </div>
            </form>
          </div>
          <div className="order-summary">
            <h3>DELIVERY</h3>
            <div className="hr"></div>
            <div className='deli-info'>
              <p><i className="fa fa-truck" aria-hidden="true"></i> Delivery time: 20 minutes</p>
              <button className='btn-yes'>Change</button>
            </div>
            <div className="hr"></div>
            <div className="deli-cut">
              <div>
                <p><b>Cutlery</b></p>
                <p>Help reduce plastic waste, only ask for cutlery if you need it. </p>
              </div>
              <input type="checkbox" />
            </div>
            <div className="hr"></div>
            <br /> <br /><br />
            <h3>SUMMARY</h3>
            <div className="hr"></div>
            {dish ? (
              <div>
                <div className="sum-dish">
                  <p><b>Items</b></p>
                  <div className="sum-qty">
                    <p>{quantity} x {dish.name}</p>
                    <p>$ {(quantity * dish.price).toFixed(2)}</p>
                  </div>
                  {selectedAddOn.name ? (
                  <div className="sum-qty">
                    <p>1 x {selectedAddOn.name}</p>
                    <p>$ {selectedAddOn.price}</p>
                  </div>
                  ) : ""}
                </div>
                <div className="hr"></div>
                <div className="sum-qty">
                  <p><b>Subtotal</b></p>
                  <p><b>$ {(quantity * dish.price + selectedAddOn.price).toFixed(2)}</b></p>
                </div>
                <div className="sum-qty">
                  <p><b>Delivery</b></p>
                  <p><b>$ 2.00</b></p>
                </div>
                <div className="sum-qty">
                  <p><b>Service</b></p>
                  <p><b>$ 1.00</b></p>
                </div>
                <div className="hr"></div>
                <div className="sum-qty">
                  <h3><b>TOTAL</b></h3>
                  <h3><b>$ {(quantity * dish.price + selectedAddOn.price + 3).toFixed(2)}</b></h3>
                </div>
              </div>
            ) : ""}
          </div>
          <button className='btn-yes'>
            <Link to="/menu/order">Checkout</Link>
          </button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default DishDetail