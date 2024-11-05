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

  const [selectedAddOn, setSelectedAddOn] = useState(0);


  const location = useLocation()
  const search = location.state?.search || ""

  return (
    <>
    <div className="page-head">
      <h1>Order Online</h1>
    </div>
    <div className="page-body">
      <div>
        <h3>ORDER FOR DELIVERY!</h3> <br />
      </div>
      <div>
        <Link to={`..${search}`}
          relative='path'
          className="back-button">
          &larr; <span>Back to All Menu</span>
        </Link>
      </div>
      <div className='order-layout'>
        {dish ? (
          <>
          <div className='order-dish'>
            <div className="card-img">
              <img src={dish.image}/>
            </div>
            <div className='dish-info'>
              <h2>{dish.name}</h2>
              <h3 style={{display: "flex", gap: "5px", alignItems: "baseline", color: "var(--Accent-2"}}><p>$</p>{dish.price}</h3>
              <div>
                <p>{dish.description}</p>
              </div>
            </div>
          </div>
        <div className="order-custo">
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
                <input type="radio" name='add' onChange={() => setSelectedAddOn(1)}
                />
              </td>
            </tr>
            <tr>
              <td>Parmesan</td>
              <td>$ 1.50</td>
              <td>
                <input type="radio" name='add' onChange={() => setSelectedAddOn(1.5)}
                /> 
              </td>
            </tr>
            <tr>
              <td>Dressing</td>
              <td>$ 2.00</td>
              <td>
                <input type="radio" name='add' onChange={() => setSelectedAddOn(2)}
                />
              </td>
            </tr>
            <tr>
              <td>No adding</td>
              <td>$ 0</td>
              <td>
                <input type="radio" name='add' defaultChecked onChange={() => setSelectedAddOn(0)}
                />
              </td>
            </tr>
            </tbody>
          </table>
          <br />
          <div className="order-total">
            <h3>Total ($)</h3>
            <div>{quantity * dish.price + selectedAddOn}</div>
          </div>
        </div>
             </>   
                ) : ""}

      </div>
    </div>
    </>
  )
}

export default DishDetail