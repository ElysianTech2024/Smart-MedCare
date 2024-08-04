import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/bgd.jpg'; // Import the background image

export default function LandingPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-3xl w-full p-8 text-black absolute top-0 left-0">
        <h1 className="text-1xl md:text-2xl font-bold mb-4">Smart MedCare</h1>
      </div>
      
      <div className="max-w-3xl w-full p-8 text-center">
        <div className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-blue-600">Welcome</span> to Smart MedCare
        </div>
        <div className="text-lg mb-8">
          <p>Revolutionizing healthcare through smart technology.</p>
          <p>Join us and experience the future of medical care.</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/sign-in"
            className="text-lg px-10 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold shadow-md transition-colors duration-300 mb-4"
            style={{ minWidth: '200px' }} // Adjust the minWidth to increase the button length
          >
            Sign In
          </Link>
          <div className="text-2x1">
            <p className="text-gray-600 mb-2">Don't have an account?</p>
            <p className="flex">
              <Link to="/register-hospital" className="text-blue-600 font-bold hover:underline">Register as a Hospital</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
