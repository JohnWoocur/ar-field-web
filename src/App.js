import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import TeamMembers from "./pages/TeamMembers";
import EmployeeProfile from "./pages/EmployeeProfile";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/team-members/:employeeId" element={<EmployeeProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
