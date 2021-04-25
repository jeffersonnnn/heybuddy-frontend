import React from "react";
import HeaderMain from "./HeaderMain";

const Layout = ({ children }) => {
  return (
    <main className="page">
      <HeaderMain />
      {children}
    </main>
  );
};

export default Layout;
