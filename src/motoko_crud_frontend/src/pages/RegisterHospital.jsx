import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/bgd.jpg'; // Import the background image

export default function RegisterHospital() {
  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-md w-full p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register as a Hospital</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="hospitalId" className="block text-sm font-medium text-gray-900">Hospital ID</label>
              <input
                id="hospitalId"
                name="hospitalId"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-900">Hospital Name</label>
              <input
                id="hospitalName"
                name="hospitalName"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="hospitalAddress" className="block text-sm font-medium text-gray-900">Hospital Address</label>
              <input
                id="hospitalAddress"
                name="hospitalAddress"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="hospitalSpecification" className="block text-sm font-medium text-gray-900">Hospital Specification</label>
              <input
                id="hospitalSpecification"
                name="hospitalSpecification"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="hospitalEmail" className="block text-sm font-medium text-gray-900">Hospital Email</label>
              <input
                id="hospitalEmail"
                name="hospitalEmail"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="hospitalPassword" className="block text-sm font-medium text-gray-900">Hospital Password</label>
              <input
                id="hospitalPassword"
                name="hospitalPassword"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Sign in</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
