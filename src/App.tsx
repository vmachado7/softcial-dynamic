import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './sign-up/SignUp_mail';
import SignIn from './sign-in/SignIn';
import Landing from './sign-in/landing.jsx';
import Checkout from './checkout/Checkout';
import Blog from './blog/Blog.jsx';
import Profile from './profile/Profile.jsx';

import Report from './blog/components/reports/Report';
import ReportTest from './blog/components/reports/ReportTest.jsx';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/home" element={<Blog />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/report/:id" element={<Report />} />
      <Route path="/ReportTest" element={<ReportTest />} />
    </Routes>
  </Router>
);
export default App;
