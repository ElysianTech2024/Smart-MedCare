import React from 'react';
import { Link } from 'react-router-dom';
import johnDoeImage from '../images/pfp.jpg'; // Import the image

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'General Examination', href: '/general-examination' },
  { name: 'Investigation', href: '/investigation' },
  { name: 'Diagnosis', href: '/diagnosis', current: true },
  { name: 'Treatment', href: '/treatment' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Medical History', href: '/medical-history' },
];

export default function Diagnosis() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">SMART MEDCARE</h1>
          {/* Profile Section */}
          <div className="flex items-center">
            <span className="mr-4"></span>
            <img
              src={johnDoeImage} // Use the imported image
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Side Navigation */}
        <div className="bg-blue-400 w-48 p-4">
          <div className="flex flex-col space-y-2">
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
          </div>
        </div>
        
        {/* Diagnosis Form */}
        <div className="flex-1 p-4">
          <div className="mx-auto w-full max-w-2xl border rounded-lg p-6 bg-gray-100 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Diagnosis Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Primary Diagnosis</label>
                <input
                  type="text"
                  placeholder="Primary Diagnosis"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Secondary Diagnosis</label>
                <input
                  type="text"
                  placeholder="Secondary Diagnosis"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Date of Diagnosis</label>
                <input
                  type="date"
                  placeholder="Date of Diagnosis"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Clinical Findings</label>
                <textarea
                  placeholder="Clinical Findings"
                  className="border border-gray-300 px-3 py-2 rounded-md w-full h-20 resize-none focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Cause</label>
                  <input
                    type="text"
                    placeholder="Cause"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Prognosis</label>
                  <input
                    type="text"
                    placeholder="Prognosis"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Severity</label>
                  <input
                    type="text"
                    placeholder="Severity"
                    className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Treatment Plan</label>
                  <input
                    type="text"
                    placeholder="Treatment Plan"
                    className="border                    border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Follow-Up Plan</label>
                    <input
                      type="text"
                      placeholder="Follow-Up Plan"
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
