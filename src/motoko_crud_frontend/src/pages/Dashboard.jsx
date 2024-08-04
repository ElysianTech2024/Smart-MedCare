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

function Dashboard() {
  return (
    <div className="flex min-h-screen">
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
      <main className="flex-1 bg-blue-50 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center p-4 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition-colors"
            >
              <item.icon className="h-6 w-6 text-blue-600 mr-3" aria-hidden="true" />
              <span className="text-lg font-medium text-blue-800">{item.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
