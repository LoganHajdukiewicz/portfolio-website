import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyle = {
    width: '40px',
    height: '40px',
    marginRight: '20px',
    borderRadius: '10px',
    border: '2px solid #CCCCCC',
    padding: '5px',
    backgroundColor: 'white'
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div style={containerStyle}>

      {/* GitHub Button */}
      <a href="https://github.com/LoganHajdukiewicz" target="_blank" rel="noopener noreferrer">
        <motion.div
          style={buttonStyle}
          whileHover="hover"
          variants={buttonVariants}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ width: '100%', height: '100%' }} />
        </motion.div>
      </a>

      {/* CodePen Button */}
      <a href="https://codepen.io/LoganHajdukiewicz" target="_blank" rel="noopener noreferrer">
        <motion.div
          style={buttonStyle}
          whileHover="hover"
          variants={buttonVariants}
        >
          <img src='https://blog.codepen.io/wp-content/uploads/2014/03/codepen-logo.svg' alt='CodePen.io' style={{ width: '100%', height: '100%' }}/>
        </motion.div>
      </a>  

      {/* LinkedIn Button */}
      <a href='https://www.linkedin.com/in/LoganHajdukiewicz/' target="_blank" rel="noopener noreferrer">
        <motion.div
            style={buttonStyle}
            whileHover="hover"
            variants={buttonVariants}
        >
          <img src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png' alt='LinkedIn' style={{ width: '100%', height: '100%', filter: 'grayscale(1) contrast(100) brightness(1)'}}/>
        </motion.div>
      </a>
      
      {/* Email Button */}
      <a href="/contact">
        <motion.div
          style={buttonStyle}
          whileHover="hover"
          variants={buttonVariants}
        >
          <img src='https://banner2.cleanpng.com/20180526/eio/kisspng-email-computer-icons-gmail-5b093a2abbd322.5464747815273313707693.jpg' alt='Email' style={{ width: '100%', height: '100%' }}/>
        </motion.div>
      </a>
    </div>
  );
}

export default Links;
