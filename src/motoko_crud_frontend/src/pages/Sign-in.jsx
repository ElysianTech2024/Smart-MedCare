import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../images/bgd.jpg'; // Import the background image

export default function SignIn() {
  return (
    <>
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-md w-full p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign in to your account</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <Link to="/dashboard" className="w-full block">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Don't have an account? <Link to="/register-patient" className="font-semibold text-indigo-600 hover:text-indigo-500">Register as a Patient</Link> or <Link to="/register-hospital" className="font-semibold text-indigo-600 hover:text-indigo-500">Register as a Hospital</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
