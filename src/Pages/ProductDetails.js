import React from 'react';
import './../App.css';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json'


function ProductDetails() {
  const { id } = useParams();
  return (
    <div >
      <h1 style={{ color: "lightGreen", textAlign: "center" }}>Great choice!</h1>
      <h3>{shoes[id].name}</h3>
      <div className="productDetails">
        <img src={shoes[id].img} alt={`img not available for ${id}`} />

        <h4>Air Jordan 3 Valour Blue. Rp2.779.000. The Air Jordan 3 remains an all-time favourite silhouette worldwide. While the design has hit shelves in an astonishing range of materials and colours, some iterations are tougher to track down than others. Such is the case for most players-exclusive (PE) releases, which are bestowed upon athletes at aAir Jordan 3 Valour Blue. Rp2.779.000. The Air Jordan 3 re</h4>
      </div>

    </div>
  );
}

export default ProductDetails;
