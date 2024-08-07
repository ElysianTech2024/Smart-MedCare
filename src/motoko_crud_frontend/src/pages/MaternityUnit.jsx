import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BeakerIcon,
  FilmIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
  CalendarIcon,
  FolderIcon,
  UserIcon,
  DocumentChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { name: 'Maternity Unit', icon: ClipboardDocumentListIcon, href: '#' },
  { name: 'Medical Records', icon: DocumentTextIcon, href: '/medical-records' },
  { name: 'Out-Patient Management', icon: HomeIcon, href: '/out-patient-management' },
  { name: 'Operation Theatre', icon: AcademicCapIcon, href: '/operation-theatre' },
  { name: 'In-Patient Management', icon: ClipboardDocumentListIcon, href: '/in-patient-management' },
  { name: 'Laboratory', icon: BeakerIcon, href: '/laboratory' },
  { name: 'Radiology', icon: FilmIcon, href: '/radiology' },
  { name: 'Pharmacy', icon: BuildingLibraryIcon, href: '/pharmacy' },
];

const maternitySubmenu = [
  { name: 'Antenatal Care', href: '/antenatal-care', icon: CalendarIcon },
  { name: 'Labour and Delivery', href: '/labour-delivery', icon: FolderIcon },
  { name: 'New Born', href: '/new-born', icon: UserIcon },
  { name: 'Postnatal Care', href: '/postnatal-care', icon: CalendarIcon },
  { name: 'Discharges', href: '/discharges', icon: DocumentChartBarIcon },
  { name: 'Appointments', href: '/appointments', icon: ClockIcon },
];

function MaternityUnitPage() {
  return (
    <div className="flex min-h-screen">
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
      <main className="flex-1 bg-blue-50 p-8 ml-64">
        <h1 className="text-3xl font-bold mb-8">Maternity Unit</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {maternitySubmenu.map((item) => (
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

export default MaternityUnitPage;
