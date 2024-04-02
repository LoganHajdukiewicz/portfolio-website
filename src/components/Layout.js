import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div>
      {isLandingPage ? null : <Navbar />}

      {/* Render the audio element with autoplay and loop attributes 
      <audio src="/path/to/your/background-music.mp3" autoPlay loop /> */}

      <div style={{ paddingTop: isLandingPage ? 0 : "80px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

