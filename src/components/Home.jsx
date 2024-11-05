import React from 'react';
import "./Home.css";
import imgSalad from "../assets/salad.png";
import imgBrushetta from "../assets/brucheta.jpg";
import imgLemon from "../assets/lemon.jpeg";
import rvImg1 from "../assets/u1.jpg"
import rvImg2 from "../assets/u2.jpg"
import rvImg3 from "../assets/u3.jpg"
import rvImg4 from "../assets/u4.jpg"
import { Link } from 'react-router-dom';

export default function Home() {
  const specials = [
    {name: 'Greek Salad', price: '12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
      image: imgSalad, id: "greek-salad"
    },
    {name: 'Bruschetta', price: '7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      image: imgBrushetta, id: "bruschetta"
    },
    {name: 'Lemon Dessert', price: '5.99', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: imgLemon, id: "lemon-dessert"
    },
    {name: 'Grilled Fish', price: '7.99', description: 'Salmon and firm, thick white fish like sea bass, red snapper, grouper and halibut are the best types of fish to grill because they are hearty. ',
      image: "https://images.unsplash.com/photo-1615044088186-a2342db7b272?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8fDI%3D",
      id: "grilled-fish"
    },
  ]
  const testimonials = [
    {name: "Lisa Gleichner", review: "The food was amazing, the staff were so polite and helpful. The banquet room is decorated very nicely for the Christmas season.", img: rvImg1},
    {name: "Alvah Feil MD", review: "Delicious dishes, it’s a great experience.  It was all very nice, and the owners were very helpful. Great food - very nice people!", img: rvImg2},
    {name: "Myra Schuppe", review: "Wow, amazing menu with great food and service. Great food at reasonable prices. Great service and the owners are terrific.", img: rvImg3},
    {name: "Mark Hartmann", review: "Everything about this place is perfect. Incredible toasted ravioli, perfectly poured martini, dinner salad with a delicious house dressing, baked potato, loaded.", img: rvImg4},
  ]
  return (
    <>
      <div className=''>
        <div className='hero'>
          <div className='hero-info'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
           We focus on fresh produce and big flavours, offering bespoke cocktails and a premium wine selection.
            </p>
            <Link to="/reservations">
              <button className='btn-yes'>Reserve Table</button>
            </Link>
          </div>
          <div className="hero-img">
            <img src="https://cdn.pixabay.com/photo/2023/09/07/15/37/ai-generated-8239337_1280.png" alt='Logo of Little Lemon'/>
          </div>
        </div>
        <div className="body specials">
          <div className="special-head">
            <h2>Specials Today!</h2>
            <Link to="/menu">  <button className="btn-yes">Online Menu</button></Link>
          </div>
          <div className='special-dish'>
            {specials.map(dish => (
              <div key={dish.name} className="dish-card">
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
                  <button>
                    <Link to={`/menu/${dish.id}`}>Order Now</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="body testimonials">
          <h2>Testimonials</h2>
          <div className='testi-layout'>
            {testimonials.map(review => (
            <div className="testi-card" key={review.name}>
              <div className="testi-name">
                <img src={review.img} className='testi-img'/>
                <div>
                  <div className="testi-star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>            
                  </div>
                  <div><p>{review.name}</p></div>
                </div>
              </div>
              <div className='testi-content'><p>{review.review}</p></div>
            </div>
            ))}
          </div>
        </div>
        <div className='body about'>
          <div className='about-info'>
            <h2>Our Story</h2> <br />
            <p>Immerse yourself in a culinary experience like no other at Little Lemon, a vibrant bar and small plates restaurant nestled in the heart of Dublin, Ireland.            
            </p>
            <br />
            <p>With a captivating blend of Mediterranean cuisine, dramatic presentations, an extensive wine selection, and show-stopping cocktails, we invite you to indulge in a symphony of flavors that will leave you craving more.            
            </p>
            <br />
            <p>At Little Lemon, we believe that great things come in small packages. Little Lemon is a Mediterranean-inspired cocktail and wine bar that takes pride in offering a tantalizing menu centered around fresh seafood, succulent meats, flavorful charcuterie, and locally sourced ingredients.
            </p>
          </div>
          <div className="about-img-contain">
            <div className="about-img" id='img1'>
              <img src="https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520996_1280.png" />
            </div>
            <div className="about-img" id='img2'>
              <img src="https://cdn.pixabay.com/photo/2016/11/08/06/45/couple-1807617_1280.jpg" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
