import React, { useState, useEffect } from "react";
import data from "../data.json";
import "../styles/ShopSection.css";


const ShopSection = () => {
  const shoe = data.shoes[0];
  const [selectedColor, setSelectedColor] = useState("black");
  const [images, setImages] = useState([]);
  const [view, setView] = useState("description");

  useEffect(() => {
    setImages([`/images/air-max-infinity-${selectedColor}.png`]);
  }, [selectedColor]);

  return (
    <section id="shop">
      <h2>Elevate Your Stride with the Nike Air Max Infinity</h2>

      <div className="shop-container">
        {/* Left - Image Container */}
        <div className="shop-image-container">
          <img src={images[0]} alt="Air-Max-Infinity" />
        </div>

        {/* Right - Details */}
        <div className="shop-details">

          {/* View Options */}
          <div className="view-options">
            <input
              className="viewBtn"
              type="radio"
              id="description"
              name="viewbtn"
              checked={view === "description"}
              onChange={() => setView("description")}
            />
            <label className="view-label" htmlFor="description">
              Description
            </label>
            <input
              className="viewBtn"
              type="radio"
              id="features"
              name="viewbtn"
              checked={view === "features"}
              onChange={() => setView("features")}
            />
            <label className="view-label" htmlFor="features">
              Features
            </label>
          </div>

          {/* Conditional View */}
          {view === "description" ? (
            <p className="shoe-description">{shoe?.description}</p>
          ) : (
            <ul className="shoe-features">
              {shoe?.features.map((feature, index) => (
                <>
                  <li key={index}>{feature.name} - {feature.description} </li>   
                     
                </>
              ))}
            </ul>
          )}

          {/* Color Options */}
          <h4>Color Options</h4>
          <div className="color-options">
            <input
              className="colorBtn"
              type="radio"
              id="color1"
              name="colorbtn"
              checked={selectedColor === "black"}
              onChange={() => setSelectedColor("black")}
            />
            <label className="color-label firstColor" htmlFor="color1"></label>
            <input
              className="colorBtn"
              type="radio"
              id="color2"
              name="colorbtn"
              checked={selectedColor === "white"}
              onChange={() => setSelectedColor("white")}
            />
            <label className="color-label secondColor" htmlFor="color2"></label>
            <input
              className="colorBtn"
              type="radio"
              id="color3"
              name="colorbtn"
              checked={selectedColor === "volt"}
              onChange={() => setSelectedColor("volt")}
            />
            <label className="color-label thirdColor" htmlFor="color3"></label>
          </div>
          <p className="shoe-price"> ${shoe?.price}</p>

          <a
            href="https://www.nike.com/in/w/air-max-shoes-a6d8hzy7ok"
            target="_blank"
            className="shop-now"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
