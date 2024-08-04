import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ExclamationCircleIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  HeartIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  FilmIcon,
  TruckIcon,
  DocumentTextIcon,
  ArchiveBoxIcon,
  ChatBubbleBottomCenterTextIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Patient Registration', icon: HomeIcon, href: '/patient-registration' },
  { name: 'Clinical Management', icon: ClipboardDocumentListIcon, href: '/clinical-management' },
  { name: 'Emergency', icon: ExclamationCircleIcon, href: '/emergency' },
  { name: 'Procedure Room', icon: BriefcaseIcon, href: '/procedure-room' },
  { name: 'Operation Theatre', icon: AcademicCapIcon, href: '/operation-theatre' },
  { name: 'In-Patient Management', icon: ClipboardDocumentListIcon, href: '/in-patient-management' },
  { name: 'Nurse Station', icon: UserGroupIcon, href: '/nurse-station' },
  { name: 'Mental Health', icon: HeartIcon, href: '/mental-health' },
  { name: 'Antenatal Care', icon: ChartBarIcon, href: '/antenatal-care' },
  { name: 'Accounts and Revenue', icon: CurrencyDollarIcon, href: '/accounts-revenue' },
  { name: 'Insurance and Eclaim', icon: ShieldCheckIcon, href: '/insurance-eclaim' },
  { name: 'Laboratory', icon: BeakerIcon, href: '/laboratory' },
  { name: 'Pharmacy', icon: BuildingLibraryIcon, href: '/pharmacy' },
  { name: 'Radiology', icon: FilmIcon, href: '/radiology' },
  { name: 'Transport', icon: TruckIcon, href: '/transport' },
  { name: 'Medical Records', icon: DocumentTextIcon, href: '/medical-records' },
  { name: 'Inventory Management', icon: ArchiveBoxIcon, href: '/inventory-management' },
  { name: 'Help Desk', icon: ChatBubbleBottomCenterTextIcon, href: '/help-desk' },
  { name: 'Waste Management', icon: ArchiveBoxXMarkIcon, href: '/waste-management' },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-blue-400 p-8">
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
    surname: '',
    forename: '',
    otherNames: '',
    dateOfBirth: '',
    age: '',
    religion: '',
    churchAttended: '',
    residentialAddress: '',
    levelOfEducation: '',
    locatorLandmark: '',
    nameOfHusband: '',
    occupationOfHusband: '',
    telephoneNumberOfHusband: '',
    nameOfGuardian: '',
    occupationOfGuardian: '',
    telephoneNumberOfGuardian: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formData); // Replace this with actual form submission logic
    // Optionally reset the form or show a success message
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-blue-50 p-8">
        <h1 className="text-3xl font-bold mb-8">Antenatal Registration</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type={key === 'dateOfBirth' ? 'date' : key === 'age' ? 'number' : key === 'telephoneNumberOfHusband' || key === 'telephoneNumberOfGuardian' ? 'tel' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>
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
