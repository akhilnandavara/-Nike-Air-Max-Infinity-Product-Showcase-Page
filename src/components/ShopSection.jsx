import data from '../data.json';

import React from 'react';

const ShopSection = () => {
  const shoe = data.shoes[0];
  return (
    <section id="shop">
      <h2>Shop Nike Air Max Infinity</h2>
      <div className="color-options">
        {shoe.colorways.map((colorway, index) => (
          <img key={index} src={colorway.image} alt={colorway.name} />
        ))}
      </div>
      <select>
        <option value="size">Select Size</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <a href="https://www.nike.com/in/w/air-max-shoes-a6d8hzy7ok" target="_blank" rel="noopener noreferrer">Shop Now</a>
    </section>
  );
};

export default ShopSection;
