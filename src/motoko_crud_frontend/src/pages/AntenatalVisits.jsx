// src/pages/AntenatalVisits.js

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BeakerIcon,
  FilmIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

// Mock data for demonstration
const dummyPatients = [
  { registrationNumber: '12345', name: 'Jane Doe' },
  { registrationNumber: '67890', name: 'John Smith' },
  // Add more mock data as needed
];

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Maternity Unit', icon: ClipboardDocumentListIcon, href: '/maternity-unit' },
  { name: 'Medical Records', icon: DocumentTextIcon, href: '/medical-records' },
  { name: 'Out-Patient Management', icon: HomeIcon, href: '/out-patient-management' },
  { name: 'Operation Theatre', icon: AcademicCapIcon, href: '/operation-theatre' },
  { name: 'In-Patient Management', icon: ClipboardDocumentListIcon, href: '/in-patient-management' },
  { name: 'Laboratory', icon: BeakerIcon, href: '/laboratory' },
  { name: 'Radiology', icon: FilmIcon, href: '/radiology' },
  { name: 'Pharmacy', icon: BuildingLibraryIcon, href: '/pharmacy' },
];

function AntenatalVisits() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setPatient(null);
    setError('');
    if (registrationNumber) {
      const foundPatient = dummyPatients.find(patient => patient.registrationNumber === registrationNumber);
      if (foundPatient) {
        setPatient(foundPatient);
        setError('');
      } else {
        setError('Registration number not found in the system');
      }
    }
  }, [registrationNumber]);

  const handleAttendToPatient = () => {
    navigate('/patient-visit-form');
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-400 p-8 fixed h-screen">
        <h1 className="text-2xl font-bold mb-4">Smart MedCare</h1>
        <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center py-2 text-black hover:text-white hover:bg-blue-600 rounded transition-colors"
            >
              <item.icon className="h-5 w-5 text-black mr-2" aria-hidden="true" />
              <span className="text-black">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 bg-blue-50 p-8 ml-64">
        <h1 className="text-3xl font-bold mb-8">Antenatal Visits</h1>

        <div className="mb-8">
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Search by Registration Number</label>
          <input
            type="text"
            id="registrationNumber"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleAttendToPatient}
        >
          Attend to Patient
        </button>

        {patient && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <p><strong>Registration Number:</strong> {patient.registrationNumber}</p>
            <p><strong>Name:</strong> {patient.name}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default AntenatalVisits;
