import React from 'react';
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

function PatientRegistrationPage() {
  return (
    <div className="flex">
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
      <main className="flex-1 p-8 bg-blue-50">
        <h1 className="text-3xl font-bold mb-8">Patient Registration</h1>
        <form className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">DOB</label>
                <input type="date" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" min="0" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Education Level</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="none">None</option>
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="higher-secondary">Higher Secondary</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Religion</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="hinduism">Hinduism</option>
                  <option value="buddhism">Buddhism</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Id</label>
                <input type="email" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">File Required</label>
                <input type="checkbox" className="mt-1 block border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reg. Date</label>
                <input type="date" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Born</label>
                <input type="checkbox" className="mt-1 block border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Home Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Post Code</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="mail">Mail</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mailing Address Same as Home Address</label>
                <input type="checkbox" className="mt-1 block border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Emergency Contact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone</label>
                <input type="text" className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Contact Relationship</label>
                <select className="mt-1 block w-full border-2 border-gray-400 rounded-md shadow-sm">
                  <option value="">Select</option>
                  <option value="relative">Relative</option>
                  <option value="friend">Friend</option>
                  <option value="colleague">Colleague</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
              Save
            </button>
            <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600">
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PatientRegistrationPage;
