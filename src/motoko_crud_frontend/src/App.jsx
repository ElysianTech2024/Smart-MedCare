import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn'; // Ensure this matches your file naming
import Dashboard from './pages/Dashboard';
import RegisterHospital from './pages/RegisterHospital';
import AntenatalCare from './pages/AntenatalCare';
import PatientRegistration from './pages/PatientRegisteration'; // Ensure this matches your file naming
import AntenatalRegistration from './pages/AntenatalRegisteration'; // Ensure this matches your file naming
import LandingPage from './pages/LandingPage';
import MaternityUnit from './pages/MaternityUnit';
import AntenatalVisits from './pages/AntenatalVisits';
import PatientVisitForm from './pages/PatientVisitForm';
import MedicationTreatment from './pages/MedicationTreatment';
import MedicationTreatmentForm from './pages/MedicationTreatmentForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-hospital" element={<RegisterHospital />} />
          <Route path="/antenatal-care" element={<AntenatalCare />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/antenatal-registration" element={<AntenatalRegistration />} />
          <Route path="/maternity-unit" element={<MaternityUnit />} />
          <Route path="/antenatal-visits" element={<AntenatalVisits />} />
          <Route path="/patient-visit-form" element={<PatientVisitForm />} />
          <Route path="/medication-treatment" element={<MedicationTreatment />} />
          <Route path="/medication-treatment-form" element={<MedicationTreatmentForm />} />
          {/* Removed the ObstetricHistory route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
