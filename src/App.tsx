import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './sign-up/SignUp';
import SignIn from './sign-in/SignIn';
import Landing from './sign-in/landing.jsx';
import Checkout from './checkout/Checkout';
import Blog from './blog/Blog.jsx';
import Profile from './profile/Profile.jsx';

import Terms from './blog/footerContent/BlogTerms.jsx';
import Privacy from './blog/footerContent/BlogPrivacy.jsx';
import Aboutus from './blog/footerContent/BlogAboutus.jsx';

import Report1 from './blog/components/reports/Report1.jsx';
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
      <Route path="/Terms" element={<Terms />} />
      <Route path="/Privacy" element={<Privacy />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Report1" element={<Report1 />} />
      <Route path="/ReportTest" element={<ReportTest />} />
    </Routes>
  </Router>
);
export default App;
