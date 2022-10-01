import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//ROUTER DOM
import Home from '../pages/Home';
import Video from '../pages/Video';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Password from '../pages/ForgotPassword';
import ReceivedEmail from '../pages/ReceivedEmail';
import Search from '../pages/Search';

//Framer Motion
import { AnimatePresence } from 'framer-motion';

// @see {@link https://beta.reactjs.org/apis/react/lazy#suspense-for-code-splitting}
const MeProfile = lazy(() => import('../pages/MeProfile'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home type="random" />}></Route>
        <Route path="/trend" element={<Home type="trend" />}></Route>
        <Route path="/sub" element={<Home type="sub" />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Fpassword" element={<Password />}></Route>
        <Route path="/receivedEmail/:token" element={<ReceivedEmail />}></Route>
        <Route path="/video/:id" element={<Video />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route
          path="/me"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MeProfile />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
