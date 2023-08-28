import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Dashboard from './pages/Dashboard.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import GoalsPage from './pages/GoalsPage.jsx';
import LiteracyPage from "./pages/Literacy.jsx";
import ChallengePage from "./pages/Challenge.jsx";




function App() {
  return (
    <>
    <Sidebar>
      <Routes>
         <Route
          path="/budget"
          element={
          <ProtectedRoutes>
          <HomePage />
          </ProtectedRoutes>
          }
        />
        {/*  </ProtectedRoutes> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/goalsPage" element={<GoalsPage />} />
        <Route path="/literacy" element={<LiteracyPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        
        <Route path="/" element={<Dashboard />} />
      </Routes>

      </Sidebar>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
