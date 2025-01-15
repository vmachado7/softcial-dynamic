import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';
import Checkout from './checkout/Checkout';
import Blog from './blog/Blog.jsx';
import Landing from './sign-in/landing.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/home" element={<Blog />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  </Router>
);
export default App;
