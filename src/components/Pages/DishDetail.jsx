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
        ) : ""}
        <div className="order-custo">
          <h3>Add</h3>
          <table>
            <tbody>
            <tr>
              <td>Feta</td>
              <td>$ 1.00</td>
              <td>
                <input type="radio" name='add' />
              </td>
            </tr>
            <tr>
              <td>Parmesan</td>
              <td>$ 1.00</td>
              <td>
                <input type="radio" name='add'/>
              </td>
            </tr>
            <tr>
              <td>Dressing</td>
              <td>$ 1.00</td>
              <td>
                <input type="radio" name='add'/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default DishDetail