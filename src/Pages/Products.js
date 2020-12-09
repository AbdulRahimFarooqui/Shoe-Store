import React from 'react';
import shoes from './../shoes.json';
import './../App.css'
import { Link } from 'react-router-dom';


function Products() {
  console.log(shoes)
  return (
    <div >
      <h1>Our Products!</h1>
      {Object.keys(shoes).map(keyName => {
        return (
          <div className="product-container">
            <div className="image-container">
              <Link to={`/products/${keyName}`} className="link">
                <img src={shoes[keyName].img} alt="not available" height={350}/>
              </Link>
            </div>
            <h3 style={{ color: "lightBlue" }}>{shoes[keyName].name}</h3>

          </div>
        );
      })}
    </div>
  );
}

export default Products;
