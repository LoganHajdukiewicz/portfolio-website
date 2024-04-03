import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
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

