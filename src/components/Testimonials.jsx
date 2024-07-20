import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/TestimonialSection.css";

const TestimonialSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const modalRef = useRef(null);

  const items = [
    {
      id: 2,
      title: "Usain Bolt",
      subtitle: "Marathoner",
      img: 'images/usain-bolt.jpg',
      quote: "The sky has no limits Neither should you These shoes are a game changer.",
    },
    {
      id: 4,
      title: "Dean Karnazes",
      subtitle: "Ultramarathon runner",
      img: 'images/dean-karnazes.jpeg',
      quote: "Run when you can, walk if you have to, crawl if you must just never give up.",
    },
    {
      id: 5,
      title: "Gabby Douglas",
      subtitle: "Gymnast",
      img: 'images/Gabby.jpg',
      quote: "The Hard days are the best because that's when champions are made.",
    },
  ];

  const selectedItem = items.find(item => item.id === selectedId);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  return (
    <Parallax
      bgImage="/images/testimonial-bg.png"
      strength={300}
      bgImageStyle={{ height: "100%", width: "100%", objectFit: "cover" }}
      blur={1}
    >
      <div className="testimonial-section">
        <h2 className="testimonial-title">What Athletes Say</h2>
        <div className="testimonial-grid">
          {items.map(item => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="testimonial-detail"
              layoutId={selectedId}
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img src={selectedItem.img} className="testimonials-img" alt="profile-pic" />
              <motion.h5>{selectedItem.subtitle}</motion.h5>
              <motion.h2>{selectedItem.title}</motion.h2>
              <motion.p>{selectedItem.quote}</motion.p>

              <motion.button
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Parallax>
  );
};

export default TestimonialSection;
