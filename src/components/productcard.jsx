import React from 'react';
import Button from './button';
import './productCard.css';

const Productcard = () => {
  
  const productImage =
    'https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-sleek-and-sophisticated-black-drum-kit-for-professional-rock-musicians-set-image_3693231.jpg'; 
  const productName = 'Blacked out Drum Kit ';
  const productPrice = '$1390.00';

  const handleViewProduct = () => {
    console.log("Button clicked")
  };

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <Button onClick={handleViewProduct} label="View Product" />
    </div>
  );
};

export default Productcard;
