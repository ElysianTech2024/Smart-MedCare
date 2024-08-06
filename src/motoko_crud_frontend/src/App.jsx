import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn"; // Ensure this matches your file naming
import Dashboard from "./pages/Dashboard";
import RegisterHospital from "./pages/RegisterHospital";
import AntenatalCare from "./pages/AntenatalCare";
import PatientRegistration from "./pages/PatientRegisteration"; // Ensure this matches your file naming
import AntenatalRegistration from "./pages/AntenatalRegisteration"; // Ensure this matches your file naming
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-hospital" element={<RegisterHospital />} />
          <Route path="/antenatal-care" element={<AntenatalCare />} />
          <Route
            path="/patient-registration"
            element={<PatientRegistration />}
          />
          <Route
            path="/antenatal-registration"
            element={<AntenatalRegistration />}
          />
          {/* Removed the ObstetricHistory route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
