import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/bgd.jpg'; // Import the background image

export default function RegisterPatient() {
  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-md w-full p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Register as a Patient</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="patientId" className="block text-sm font-medium text-gray-900">Patient ID</label>
              <input
                id="patientId"
                name="patientId"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-900">Patient Name</label>
              <input
                id="patientName"
                name="patientName"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-900">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-900">Gender</label>
              <input
                id="gender"
                name="gender"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-900">Height (in meters)</label>
              <input
                id="height"
                name="height"
                type="number"
                step="0.01"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-900">Weight (in kg)</label>
              <input
                id="weight"
                name="weight"
                type="number"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-900">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email ID</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-900">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                autoComplete="off"
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
