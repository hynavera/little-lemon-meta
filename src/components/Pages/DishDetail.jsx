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
        <Link to={`..${search}`}
          relative='path'
          className="back-button">
          &larr; <span>Back to All Menu</span>
        </Link>
      </div>
      <div>
        {dish ? (
          <div>
            <img src={dish.image} alt="" />
          </div>
        ) : ""}
      </div>
    </div>
    </>
  )
}

export default DishDetail