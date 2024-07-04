import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../images/pfp.jpg';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation' },
  { name: 'Diagnosis', href: '/diagnosis' },
  { name: 'Treatment', href: '/treatment' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  const [activeField, setActiveField] = useState(null);

  const fields = [
    { name: 'Allergies', data: [
      { allergen: 'Peanuts', severity: 'Moderate', date: '2023-05-12', precautions: 'Avoid peanuts' },
      { allergen: 'Pollens', severity: 'Mild', date: '2022-08-21', precautions: 'Antihistamines' },
      { allergen: 'Penicillin', severity: 'Severe', date: '2024-01-10', precautions: 'Avoid penicillin-based antibiotics' }
    ]},
    { name: 'Conditions', data: [
      { diagnosis: 'Asthma', treatmentPlan: 'Inhalers, Avoid triggers', medicalHistory: 'No recent attacks' },
      { diagnosis: 'Diabetes', treatmentPlan: 'Insulin injections, Monitor blood sugar', medicalHistory: 'Stable condition' },
      { diagnosis: 'Hypertension', treatmentPlan: 'Antihypertensive medications, Lifestyle changes', medicalHistory: 'Controlled blood pressure' }
    ]},
    { name: 'Medications', data: [
      { name: 'Aspirin', dosage: '100 mg', frequency: 'Once daily', route: 'Oral' },
      { name: 'Insulin', dosage: '10 units', frequency: 'Twice daily', route: 'Subcutaneous injection' },
      { name: 'Lisinopril', dosage: '10 mg', frequency: 'Once daily', route: 'Oral' }
    ] }
  ];

  const handleFieldClick = (field) => {
    setActiveField(activeField === field ? null : field);
  };

  return (
    <div className="flex">
      {/* Side Navigation */}
      <div className="bg-blue-400 w-48 h-screen p-4 fixed">
        <div className="flex flex-col h-full justify-between">
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
                  className={classNames(
                    item.current
                      ? 'bg-blue-600 text-black'
                      : 'text-black hover:bg-blue-600 hover:text-white',
                    'group flex items-center px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300'
                  )}
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
        <div className="space-y-4">
          {/* Patient Information Card */}
          <div className="bg-slate-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Patient Information</h2>
            <div className="flex items-center space-x-4">
              <img className="h-16 w-16 rounded-full" src={pfp} alt="Patient" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                <p className="text-gray-600">Male, 42 years</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500 font-semibold">Date of Birth:</p>
                <p className="text-gray-800">01/01/1980</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Weight:</p>
                <p className="text-gray-800">70 kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Age:</p>
                <p className="text-gray-800">42 years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Height:</p>
                <p className="text-gray-800">180 cm</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">BMI:</p>
                <p className="text-gray-800">21.6</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Contact Information:</p>
                <p className="text-gray-800">123-456-7890</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Insurance Information:</p>
                <p className="text-gray-800">Provider XYZ</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Emergency Contact:</p>
                <p className="text-gray-800">Jane Doe, Spouse, 987-654-3210</p>
              </div>
            </div>
          </div>
          {/* Vital Signs Chart */}
          <div>
            <h2 className="text-xl font-semibold mb-4 p-2 rounded-lg text-black">Vital Signs Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { name: 'Jan', heartRate: 72, bloodPressure: 120, respiratoryRate: 16, temperature: 98.6 },
                  { name: 'Feb', heartRate: 74, bloodPressure: 122, respiratoryRate: 18, temperature: 98.4 },
                  { name: 'Mar', heartRate: 70, bloodPressure: 118, respiratoryRate: 20, temperature: 98.7 },
                  { name: 'Apr', heartRate: 75, bloodPressure: 125, respiratoryRate: 17, temperature: 98.9 },
                  { name: 'May', heartRate: 71, bloodPressure: 121, respiratoryRate: 15, temperature: 99.1 },
                  { name: 'Jun', heartRate: 73, bloodPressure: 123, respiratoryRate: 19, temperature: 98.8 },
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="heartRate" stroke="#8884d8" name="Heart Rate (bpm)" />
                <Line type="monotone" dataKey="bloodPressure" stroke="#82ca9d" name="Blood Pressure (mmHg)" />
                <Line type="monotone" dataKey="respiratoryRate" stroke="#ffc658" name="Respiratory Rate (breaths/min)" />
                <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°F)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Conditions Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4 p-2 rounded-lg text-black">Conditions</h2>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-blue-100">Diagnosis</th>
                  <th className="border px-4 py-2 bg-blue-100">Treatment Plan</th>
                  <th className="border px-4 py-2 bg-blue-100">Medical History</th>
                </tr>
              </thead>
              <tbody>
                {fields.find(field => field.name === 'Conditions').data.map((condition, idx) => (
                  <tr key={idx} onClick={() => handleFieldClick('Conditions')}>
                    <td className="border px-4 py-2">{condition.diagnosis}</td>
                    <td className="border px-4 py-2">{condition.treatmentPlan}</td>
                    <td className="border px-4 py-2">{condition.medicalHistory}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Allergies Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4 p-2 rounded-lg text-black">Allergies</h2>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-blue-100">Type of Allergen</th>
                  <th className="border px-4 py-2 bg-blue-100">Severity of allergic reaction</th>
                  <th className="border px-4 py-2 bg-blue-100">Date the allergy was documented</th>
                  <th className="border px-4 py-2 bg-blue-100">Treatments or Precautions</th>
                </tr>
              </thead>
              <tbody>
                {fields.find(field => field.name === 'Allergies').data.map((allergy, idx) => (
                  <tr key={idx} onClick={() => handleFieldClick('Allergies')}>
                    <td className="border px-4 py-2">{allergy.allergen}</td>
                    <td className="border px-4 py-2">{allergy.severity}</td>
                    <td className="border px-4 py-2">{allergy.date}</td>
                    <td className="border px-4 py-2">{allergy.precautions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Medications Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4 p-2 rounded-lg text-black">Medications</h2>
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-blue-100">Medication Name</th>
                  <th className="border px-4 py-2 bg-blue-100">Dosage</th>
                  <th className="border px-4 py-2 bg-blue-100">Frequency</th>
                  <th className="border px-4 py-2 bg-blue-100">Route of Administration</th>
                </tr>
              </thead>
              <tbody>
                {fields.find(field => field.name === 'Medications').data.map((medication, idx) => (
                  <tr key={idx} onClick={() => handleFieldClick('Medications')}>
                    <td className="border px-4 py-2">{medication.name}</td>
                    <td className="border px-4 py-2">{medication.dosage}</td>
                    <td className="border px-4 py-2">{medication.frequency}</td>
                    <td className="border px-4 py-2">{medication.route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

