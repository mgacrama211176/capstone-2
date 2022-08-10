import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//ROUTER DOM
import Home from "../pages/Home";
import Video from "../pages/Video";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

//Framer Motion
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/video/:id" element={<Video />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
