import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Footer from "./Footer";
import Login from "./Login/Login";
import Explore from "./Explore";
import Observe from "./Explore/Observe";
import Community from "./Community";
import Profile from "./Community/profile";


function Ecologist() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Explore" element={<Explore />} />
                <Route path="/Explore/:observationId" element={<Observe />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/Community/:userId" element={<Profile />} />

            </Routes>
            <Footer />
        </ BrowserRouter>
    );
}

export default Ecologist;
