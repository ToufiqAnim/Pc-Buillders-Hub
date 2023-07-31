import React from "react";
import Navbar from "./Navbar";
import CustomFooter from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CustomFooter />
    </>
  );
};

export default RootLayout;
