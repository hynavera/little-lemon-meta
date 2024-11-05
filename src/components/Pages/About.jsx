import React from 'react';


const About = () => {
  return (
    <>
    <div className="page-head">
      <h1>About Us</h1>
    </div>
    <div className='body about'>
      <div className='about-info'>
        <h2>Our Story</h2>
        <br />
        <p>Immerse yourself in a culinary experience like no other at Little Lemon, a vibrant bar and small plates restaurant nestled in the heart of Dublin, Ireland.            
        </p>
        <br />
        <p>With a captivating blend of Mediterranean cuisine, dramatic presentations, an extensive wine selection, and show-stopping cocktails, we invite you to indulge in a symphony of flavors that will leave you craving more.            
        </p>
        <br />
        <p>At Little Lemon, we believe that great things come in small packages. Little Lemon is a Mediterranean-inspired cocktail and wine bar that takes pride in offering a tantalizing menu centered around fresh seafood, succulent meats, flavorful charcuterie, and locally sourced ingredients.
        </p>
        <br /><p>Our chefs skillfully craft dishes that highlight the natural flavors of high-quality ingredients, ensuring a remarkable dining experience. From ocean-fresh seafood to perfectly grilled meats, every bite at Little Lemon is a celebration of Mediterranean cuisine. Our commitment to using locally sourced ingredients guarantees freshness and showcases the region's best. Join us at Little Lemon and indulge in a memorable dining experience where Mediterranean flavors take center stage.
        </p>
      </div>
      <div className="about-img-contain">
        <div className="about-img" id='img1'>
          <img src="https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520996_1280.png" alt=''/>
        </div>
        <div className="about-img" id='img2'>
          <img src="https://cdn.pixabay.com/photo/2016/11/08/06/45/couple-1807617_1280.jpg" alt=''/>
        </div>
      </div>
    </div>

    </>
  )
}

export default About