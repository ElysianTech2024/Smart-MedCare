import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import SignIn from './pages/Sign-in';
import Dashboard from './pages/Dashboard';
import GeneralExamination from './pages/GeneralExamination';
import Investigation from './pages/Investigation';
import Diagnosis from './pages/Diagnosis';
import Treatment from './pages/Treatment';
import Insurance from './pages/Insurance';
import MedicalHistory from './pages/MedicalHistory';
import RegisterPatient from './pages/RegisterPatient';
import RegisterHospital from './pages/RegisterHospital';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Set the landing page as the home route */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/general-examination" element={<GeneralExamination />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/register-hospital" element={<RegisterHospital />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
