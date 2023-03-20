import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
