import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation' },
  { name: 'Diagnosis', href: '/diagnosis' },
  { name: 'Treatment', href: '/treatment' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history', current: true },
];

const sampleMedicalHistory = [
  {
    recordId: '1',
    date: '2023-01-15',
    patientName: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodTest: 'Normal',
    urineTest: 'Normal',
    ecg: 'Normal',
    mriScan: 'Not required',
    ctScan: 'Not required',
    xRay: 'Not required',
    labTest: 'None',
    primaryDiagnosis: 'Hypertension',
    doctorId: 'Dr. Smith',
    hospitalId: 'City Hospital',
  },
  {
    recordId: '2',
    date: '2023-02-20',
    patientName: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodTest: 'Normal',
    urineTest: 'Normal',
    ecg: 'Normal',
    mriScan: 'Not required',
    ctScan: 'Not required',
    xRay: 'Not required',
    labTest: 'None',
    primaryDiagnosis: 'Hyperlipidemia',
    doctorId: 'Dr. Johnson',
    hospitalId: 'City Hospital',
  },
  // More sample data
  {
    recordId: '3',
    date: '2023-03-10',
    patientName: 'John Doe',
    age: 45,
    gender: 'Female',
    bloodTest: 'Normal',
    urineTest: 'Normal',
    ecg: 'Abnormal',
    mriScan: 'Required',
    ctScan: 'Required',
    xRay: 'Not required',
    labTest: 'Blood sugar',
    primaryDiagnosis: 'Diabetes',
    doctorId: 'Dr. Anderson',
    hospitalId: 'County Hospital',
  },
  {
    recordId: '4',
    date: '2023-04-05',
    patientName: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodTest: 'Normal',
    urineTest: 'Abnormal',
    ecg: 'Normal',
    mriScan: 'Not required',
    ctScan: 'Required',
    xRay: 'Required',
    labTest: 'Urine culture',
    primaryDiagnosis: 'Urinary tract infection',
    doctorId: 'Dr. Lee',
    hospitalId: 'Community Hospital',
  },
  // Additional sample data
  {
    recordId: '5',
    date: '2023-05-20',
    patientName: 'John Doe',
    age: 45,
    gender: 'Female',
    bloodTest: 'Abnormal',
    urineTest: 'Normal',
    ecg: 'Normal',
    mriScan: 'Not required',
    ctScan: 'Not required',
    xRay: 'Not required',
    labTest: 'Cholesterol',
    primaryDiagnosis: 'Hypercholesterolemia',
    doctorId: 'Dr. Martinez',
    hospitalId: 'City Hospital',
  },
  {
    recordId: '6',
    date: '2023-06-12',
    patientName: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodTest: 'Normal',
    urineTest: 'Abnormal',
    ecg: 'Abnormal',
    mriScan: 'Not required',
    ctScan: 'Not required',
    xRay: 'Not required',
    labTest: 'PSA',
    primaryDiagnosis: 'Prostate cancer',
    doctorId: 'Dr. Thompson',
    hospitalId: 'County Hospital',
  },
  // You can continue adding more sample data as needed
];


const MedicalHistory = () => {
  const [sortBy, setSortBy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (field) => {
    setSortBy(field);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMedicalHistory = sampleMedicalHistory.filter((record) =>
    record.primaryDiagnosis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMedicalHistory = sortBy
    ? filteredMedicalHistory.slice().sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      })
    : filteredMedicalHistory;

  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed top-0 left-0">
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation */}
          <div>
            <div className="flex items-center mb-8">
              <h1 className="text-lg font-semibold text-black">SMART MEDCARE</h1>
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={item.current
                    ? 'bg-blue-600 text-black group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300'
                    : 'text-black hover:bg-blue-600 hover:text-white group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300'
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          {/* Footer */}
          <div>
            <p className="text-xs text-gray-200">Your Company Name</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ml-48">
        {/* Search and Sort Controls */}
        <div className="mb-4 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search by diagnosis..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded-md px-3 py-1 w-64"
          />
          <div className="relative">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
              Sort by
            </button>
            <ul className="absolute hidden bg-white border rounded-md mt-2 w-32">
              <li>
                <button
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => handleSort('date')}
                >
                  Date
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => handleSort('primaryDiagnosis')}
                >
                  Diagnosis
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Medical History Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs ffont-weight-800 text-black uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 text-black uppercase tracking-wider">
                  Patient Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 text-black uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 text-black uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 black uppercase tracking-wider">
                  Primary Diagnosis
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 black uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 black uppercase tracking-wider">
                  Hospital
                </th>
                <th className="px-6 py-3 text-left text-xs font-weight-800 text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {sortedMedicalHistory.map((record, index) => (
                <tr key={record.recordId} className={index % 2 === 0 ? 'bg-blue-200' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.patientName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.primaryDiagnosis}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.doctorId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.hospitalId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* Add action buttons here */}
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                    {/* Add other actions as needed */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

