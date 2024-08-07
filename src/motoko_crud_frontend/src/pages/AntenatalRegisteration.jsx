import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BeakerIcon,
  FilmIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

// Sidebar component with only relevant menu items
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

function Sidebar() {
  return (
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
  );
}

function AntenatalRegistration() {
  const [formData, setFormData] = useState({
    registrationNumber: '', // auto-generated
    surname: '',
    forename: '',
    otherNames: '',
    dateOfBirth: '',
    age: '', // auto-calculated
    religion: '',
    ethnicity: '',
    nationality: '',
    occupation: '',
    contactNumber: '',
    emailAddress: '',
    nameOfHusbandPartner: '',
    occupationOfHusbandPartner: '',
    contactNumberOfHusbandPartner: '',
    nameOfGuardian: '',
    occupationOfGuardian: '',
    contactNumberOfGuardian: '',
    residentialAddress: '',
    locatorLandmark: '',
    bloodGroup: '',
    knownAllergies: '',
    chronicConditions: '',
    previousObstetricHistory: '',
    currentMedications: '',
    preferredLanguage: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactNumber: '',
  });

  useEffect(() => {
    // Auto-generate registration number when the component mounts
    const generateRegistrationNumber = () => {
      return `REG-${Math.floor(Math.random() * 10000)}`;
    };

    setFormData((prevData) => ({
      ...prevData,
      registrationNumber: generateRegistrationNumber(),
    }));
  }, []);

  const calculateAge = (dob) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      if (name === 'dateOfBirth') {
        newData.age = calculateAge(value);
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Replace this with actual form submission logic
    // Optionally reset the form or show a success message
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-blue-50 p-8 ml-64">
        <h1 className="text-3xl font-bold mb-8">Antenatal Registration</h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg font-semibold mb-2">Patient Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).filter(([key]) =>
                  ['registrationNumber', 'surname', 'forename', 'otherNames', 'dateOfBirth', 'age', 'religion', 'ethnicity', 'nationality', 'occupation', 'contactNumber', 'emailAddress'].includes(key)
                ).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={key === 'dateOfBirth' ? 'date' : key === 'age' ? 'text' : key === 'contactNumber' ? 'tel' : key === 'emailAddress' ? 'email' : 'text'}
                      name={key}
                      value={key === 'age' ? value : value}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      readOnly={key === 'age' || key === 'registrationNumber'} // Make age and registrationNumber fields read-only
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Family Information */}
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg font-semibold mb-2">Family Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).filter(([key]) =>
                  ['nameOfHusbandPartner', 'occupationOfHusbandPartner', 'contactNumberOfHusbandPartner', 'nameOfGuardian', 'occupationOfGuardian', 'contactNumberOfGuardian'].includes(key)
                ).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={key === 'contactNumberOfHusbandPartner' || key === 'contactNumberOfGuardian' ? 'tel' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Address Information */}
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg font-semibold mb-2">Address Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).filter(([key]) =>
                  ['residentialAddress', 'locatorLandmark'].includes(key)
                ).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Medical Information */}
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg font-semibold mb-2">Medical Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).filter(([key]) =>
                  ['bloodGroup', 'knownAllergies', 'chronicConditions', 'previousObstetricHistory', 'currentMedications'].includes(key)
                ).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Other Information */}
            <fieldset className="border p-4 rounded-lg mb-4">
              <legend className="text-lg font-semibold mb-2">Other Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(formData).filter(([key]) =>
                  ['preferredLanguage', 'emergencyContactName', 'emergencyContactRelationship', 'emergencyContactNumber'].includes(key)
                ).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={key === 'emergencyContactNumber' ? 'tel' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AntenatalRegistration;
