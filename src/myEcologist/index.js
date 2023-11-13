import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Footer from "./Footer";
import Login from "./Login/Login";
import HomeMainCarousel from "./Home/Carousel/Carousel";
import HomeCommunityCarousel from "./Home/CommunityCarousel/CommunityCarousel";
import SignUp from "./Login/SignUp";
import About from "./About/About";
import Explore from "./Explore";
import Observation from "./Explore/Observation";
import Species from "./Explore/Species";
import Observers from "./Explore/Observers";
import Community from "./Community";
import Profile from "./Community/profile";

function Ecologist() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Explore/:observationId" element={<Observation />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Community/:userId" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Ecologist;
