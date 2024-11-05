import React, { useEffect, useState } from 'react'
import "./pages.css"
import { useSearchParams, Link } from 'react-router-dom';

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch(`/api/dishes`)
    .then(res => res.json())
    .then((data => setDishes(data.dishes)))
  }, [])

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const displayedDishes = typeFilter ? dishes.filter(dish => dish.type === typeFilter) : dishes

  const specialDishes = displayedDishes.map(dish => (
    <div key={dish.name} className="dish-card">
      <Link 
        to={dish.id} 
        state={{
        search: `?${searchParams.toString()}`, type: typeFilter
        }}
      >
        <div className="card-img">
          <img src={dish.image} alt="special-dish" />
        </div>
        <div className="card-info">
          <div className="card-name">
            <h3>{dish.name}</h3>
            <div className='price' style={{display: "flex", gap: "5px", alignItems: "baseline"}}><p>$</p>{dish.price}</div>
          </div>
          <div className='card-description'>
            <p>{dish.description}</p>
          </div>
          <button>Order Now</button>
        </div>
      </Link>
    </div>
  ))

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }


  return (
    <>
    <div className="page-head">
      <h1>Our Menu</h1>
    </div>
    <div className="page-body menu">
      <div>
        <h3>EXPLORE OUR DISHES</h3> <br />
        <div className='menu-tab'>
          <button className={`btn-menu ${typeFilter === null ? "selected" : null}`} onClick={() => handleFilterChange("type", null)}
          >All</button>
          <button className={`btn-menu ${typeFilter === "1" ? "selected" : null}`} onClick={() => handleFilterChange("type", 1)}
          >Lunch</button>
          <button className={`btn-menu ${typeFilter === "2" ? "selected" : null}`} onClick={() => handleFilterChange("type", 2)}
          >Mains</button>
          <button className={`btn-menu ${typeFilter === "3" ? "selected" : null}`} onClick={() => handleFilterChange("type", 3)}
          >Desserts</button>
        </div>
      </div>
      <div className='dish-layout'>
        {specialDishes}
      </div>
    </div>

    </>
  )
}

export default Menu