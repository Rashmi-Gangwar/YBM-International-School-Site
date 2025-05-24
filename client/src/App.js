import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Main";
import About from "./pages/About";
import LifeatYBM from "./pages/LifeatYBM";
import NewsEvents from "./pages/NewsEvents";
import Register from "./components/Register";

import Academics from "./pages/Academics";
import Admission from "./pages/Admission";

import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lifeatYBM" element={<LifeatYBM/>} />
          <Route path="/events" element={<NewsEvents />} />
          <Route path="/register" element={<Register />} />

          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
