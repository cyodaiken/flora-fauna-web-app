import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Footer from "./Footer";
import Login from "./Login/Login";
import HomeMainCarousel from "./Home/Carousel/Home/Carousel";
import HomeCommunityCarousel from "./Home/CommunityCarousel/CommunityCarousel";

function Ecologist() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <HomeMainCarousel />
      <HomeCommunityCarousel />
      <Footer />
    </BrowserRouter>
  );
}

export default Ecologist;
