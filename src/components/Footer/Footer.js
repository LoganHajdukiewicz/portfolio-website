import React from 'react';
import Links from './Links';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
      bottom: 0,
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Links />
    </footer>
  );
}

export default Footer;
