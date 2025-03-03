import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './sign-up/SignUp_mail';
import SignIn from './sign-in/SignIn';
import Landing from './sign-in/landing.jsx';
import Checkout from './checkout/Checkout';
import Plans from './checkout/Plans';
import Blog from './blog/Blog.jsx';
import BlogTest from './blog/BlogTest.jsx';
import Profile from './profile/Profile.jsx';

import Report from './blog/components/reports/Report';
import ReportTest from './blog/components/reports/ReportTest.jsx';

import AdminSignIn from './admin/AdminSignIn';
import AdminDashboard from './admin/AdminDashboard';
import AdminAuthGuard from './admin/AuthGuard';

import VerificationPage from './verification/VerificationPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/home" element={<Blog/>} />
      <Route path="/home/User007" element={<Blog/>} />
      <Route path="/home/User002" element={<BlogTest />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/report/:id" element={<Report />} />
      <Route path="/ReportTest" element={<ReportTest />} />
      <Route path="/admin" element={<AdminSignIn />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminAuthGuard redirectTo="/admin">
              <AdminDashboard />
            </AdminAuthGuard>
          } 
        />
      <Route path="/verify" element={<VerificationPage />} />
    </Routes>
  </Router>
);
export default App;
