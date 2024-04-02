import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import profilePicture from "./Photos/profilePicture.jpg";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
      controls.start({ opacity: isVisible ? 1 : 0 });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, prevScrollPos]);

  return (
    <motion.nav
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.1s",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
      }}
      initial={{ opacity: 1 }}
      animate={controls}
    >
      <ul style={{ listStyleType: "none", padding: "0px 0", margin: 10 }}>
        <motion.li
          style={{ display: "inline-block", marginRight: "10px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/home">
            <motion.img
              src={profilePicture}
              alt="Home"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                marginTop: "-5px"
              }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.li>
        
        <motion.li
          style={{ display: "inline-block", marginRight: "10px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/about">About Me</Link>
        </motion.li>

        <motion.li
          style={{ display: "inline-block", marginRight: "10px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/portfolio">My Projects</Link>
        </motion.li>

        <motion.li
          style={{ display: "inline-block", marginRight: "10px"}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/blog">DevLogs</Link>
        </motion.li>

        <motion.li
          style={{ display: "inline-block"}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>

      </ul>
    </motion.nav>
  );
};

export default Navbar;
