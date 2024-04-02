import React, { useState } from "react";
import { motion } from "framer-motion";
import profilePicture from "./Photos/profilePicture.jpg";

const Landing = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setHovered(false);
    setTimeout(() => {
      window.location.href = "/home";
    }, 700);
  };

  const handleMouseOver = () => {
    if (!clicked) {
      setHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (!clicked) {
      setHovered(false);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}> 
      <motion.div
        style={{ position: "relative" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <motion.img
          src={profilePicture}
          initial={{
            opacity: 1
          }}
          animate={{
            scale: clicked ? 0.15 : 1,
            rotate: clicked ? -360 : 0,
            x: clicked ? "-46vw" : "-50",
            y: clicked ? "-43vh" : "-50",
            borderRadius: clicked ? "50%" : "0%",
            filter: clicked ? "brightness(100%)" : hovered ? "brightness(70%)" : "brightness(100%)",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          style={{
            maxWidth: "80vh",
            maxHeight: "80vh",
            cursor: "pointer",
            transition: "filter 0.3s ease"
          }}
          onClick={handleClick}
        />
        {hovered && !clicked && (
          <motion.div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              pointerEvents: "none"
            }}
          >
            Click Me
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Landing;
