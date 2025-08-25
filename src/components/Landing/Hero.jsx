import React, {useEffect, useState, useRef} from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom';

const Hero = () => {
  const [menu, setMenu] = useState(1);
  const handleSetMenu1 = () => {
    setMenu(1);
  }
  const handleSetMenu2 = () => {
    setMenu(2);
  }
  const handleSetMenu3 = () => {
    setMenu(3);
  }

  const [currentMenu, setCurrentMenu] = useState(1);
  const prevMenuRef = useRef(1); // Use useRef to track the previous menu
  const imgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMenu((prevMenu) => {
        if (prevMenu === 3) {
          return 1;
        } else {
          return prevMenu + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentMenu !== prevMenuRef.current) {
      prevMenuRef.current = currentMenu;

      if (imgRef.current) {
        imgRef.current.classList.remove('hero-img-animation-1', 'hero-img-animation-2', 'hero-img-animation-3', 'active'); // Remove all classes
        imgRef.current.classList.add(`hero-img-animation-${currentMenu}`); 
      }

      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.classList.add('active'); 
        }
        setMenu(currentMenu); 
      }, 500); 
    }
  }, [currentMenu]);

  return (
    <div className="hero1">

    <section className="wide">
      <div className="row">
        <div className="col l-6 p-4 hero1-img">
          <img 
            src={menu === 1 
              ? "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2Fcrep1.png?alt=media&token=e0461ec0-51f4-478e-998a-42eeb3f67558" 
              : menu === 2 
                ? "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2Fcrep2.png?alt=media&token=d37569cc-18f5-4aac-bfcb-a98cc185dbf7" 
                : "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2Fcrepe.png?alt=media&token=915f5a77-a6c7-4c90-9b64-3a0286a943e6" 
            } 
            ref={imgRef}
          />
          {/* {menu === 1 &&
            <img src="" alt="" />
          }
          {menu === 2 &&
            <img src="" alt="" />
          }
          {menu === 3 &&
            <img src="" alt="" />
          } */}
        </div>
        <div className="col l-0-1 l-5 p-3 hero1-menu">
          <h2>New Releases!</h2>
          <br /> <br />
          {menu === 1 && <>
            <h4>CREPE DESSERT</h4>
            <h1>Sweets with cream & fruits</h1>
            <p>Common fillings include hazelnut cocoa spread, preserves, sugar, maple syrup, golden syrup, lemon juice, whipped cream, fruit spreads, custard, and sliced soft fruits or confiture.
            </p>
          </>}
          {menu === 2 && <>
            <h4>SPECIALS-DINNING</h4>
            <h1>Savory galettes des crepes</h1>
            <p>Batter made from buckwheat flour is gluten-free, common savory fillings for crêpes are cheese, ham, and eggs, ratatouille, mushrooms, artichoke, and various meat products.
            </p>
          </>}
          {menu === 3 && <>
            <h4>FULL-TOPPINGS</h4>
            <h1>Spices, mixes & more dressings</h1>
            <p>How about make a cke by tacking plain crepes on top of each other, adding a layer of filling between the layers. Add fruit, chocolate, cookies, marshmallows or spices for a creative and delicious treat.
            </p>
          </>}
          <div className="row hero1-circle-row">
            <div className="hero1-circle" onClick={handleSetMenu1}>
              <img src="https://images.unsplash.com/photo-1582995570162-9dee25247fda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 1 ? 'active' : ''}`}
              />
            </div>
            <div className="hero1-circle" onClick={handleSetMenu2}>
              <img src="https://images.unsplash.com/photo-1667902687249-0dfe266a3b2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 2 ? 'active' : ''}`}
              />
            </div>
            <div className="hero1-circle" onClick={handleSetMenu3}>
              <img src="https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 3 ? 'active' : ''}`}
              />
            </div>
          </div>
          <br /> <br />
            <p>
              Enjoy unique crepes based on French recipes from our newest recepies.
            </p>
            <Link to='/menu?type=4' className="row" style={{textDecoration: "none"}}>
                  <button className='btn-yes col l-6 p-2'>View Crepes Menu</button>
            </Link>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero