import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';
import Checkout from './checkout/Checkout';
import Blog from './blog/Blog.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
);
export default App;
