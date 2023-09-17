import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import ProfilePage from './pages/ProfilePage.jsx';
import GoalsPage from './pages/GoalsPage.jsx';
import LiteracyPage from "./pages/Literacy.jsx";
import ChallengePage from "./pages/Challenge.jsx";
import MakingABudget from "./pages/MakingABudget.jsx";
import ManagingFinances from "./pages/ManagingFinances.jsx";
import GettingOutOfDebt from "./pages/GettingOutOfDebt.jsx";
import FinancialIndependence from "./pages/FinancialIndependence.jsx";
import LongTermInvestment from "./pages/LongTermInvestment.jsx";
import SavingForRetirement from "./pages/SavingForRetirement.jsx";




function App() {
  return (
    <>
    <Sidebar>
      <Routes>
          <Route
           path="/" element={
          <ProtectedRoutes>
          <HomePage />
          </ProtectedRoutes>
          } />

         <Route
          path="/budget"
          element={
          <ProtectedRoutes>
          <HomePage />
          </ProtectedRoutes>
          }
        />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/goalsPage" element={<GoalsPage />} />
        <Route path="/literacy" element={<LiteracyPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        
        <Route path="/literacypage/makingabudget" element={<MakingABudget />} />
        <Route path="/literacypage/managingfinances" element={<ManagingFinances />} />
        <Route path="/literacypage/gettingoutofdebt" element={<GettingOutOfDebt />} />
        <Route path="/literacypage/financialindependence" element={<FinancialIndependence />} />
        <Route path="/literacypage/longterminvestment" element={<LongTermInvestment />} />
        <Route path="/literacypage/savingforretirement" element={<SavingForRetirement />} />
        
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
