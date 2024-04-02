import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current location is the landing page ("/")
  const isLandingPage = location.pathname === "/";

  return (
    <div>
      {isLandingPage ? null : <Navbar />}
      <div style={{ paddingTop: isLandingPage ? 0 : "80px" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

