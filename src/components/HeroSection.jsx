// src/components/HeroSection.js
import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <Parallax
      bgImage="/public/images/bg-1.png"
      strength={500}
      
      bgImageStyle={{  height: "100%", width: "100%",objectFit: "cover" }}
    >
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: -10, scale: 1.1 }}
         transition={{ duration: 0.8 }}
        >
          Unleash Your Potential with Every Step
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the ultimate comfort and performance of the Nike Air Max Infinity
        </motion.p>
        <motion.div
          className="hero-btn"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button>Shop Now</button>
        </motion.div>
      </div>
    </Parallax>
  );
};

export default HeroSection;
