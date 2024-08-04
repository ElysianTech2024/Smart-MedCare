import React, { useState, useEffect } from 'react';
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

// Sidebar and other components remain the same
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

function AntenatalCare() {
  const [patientRecords, setPatientRecords] = useState([]);
  const [patientInfo, setPatientInfo] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    // Fetch patient records, schedules, etc.
    // Example API calls (replace with actual endpoints)
    fetch('/api/patient-records')
      .then(response => response.json())
      .then(data => setPatientRecords(data));

    fetch('/api/schedule')
      .then(response => response.json())
      .then(data => setSchedule(data));
  }, []);

  const handlePatientSelect = (patientId) => {
    fetch(`/api/patient-info/${patientId}`)
      .then(response => response.json())
      .then(data => setPatientInfo(data));
    setSelectedPatient(patientId);
  };

  const handleUpdatePatient = () => {
    if (!selectedPatient) return;
    fetch(`/api/update-patient/${selectedPatient}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patientInfo),
    })
      .then(response => response.json())
      .then(data => {
        alert('Patient info updated successfully!');
        setPatientInfo(null);
      });
  };

  const handleSendMessage = () => {
    fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, patientId: selectedPatient }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Message sent successfully!');
        setMessage('');
      });
  };

  const antenatalCareMenu = [
    { name: 'Antenatal Registration', icon: AcademicCapIcon, href: '/antenatal-registration' },
    { name: 'Health Monitoring', icon: HeartIcon, href: '/antenatal-care/health-monitoring' },
    { name: 'Medication Management', icon: BeakerIcon, href: '/antenatal-care/medication-management' },
    { name: 'Immunization', icon: ShieldCheckIcon, href: '/antenatal-care/immunization' },
    { name: 'Labor and Delivery', icon: ChartBarIcon, href: '/antenatal-care/labor-delivery-plan' },
    { name: 'Health Records', icon: DocumentTextIcon, href: '/antenatal-care/health-records' },
    { name: 'Postnatal Care', icon: UserGroupIcon, href: '/antenatal-care/postnatal-care' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-blue-50 p-8">
        <h1 className="text-3xl font-bold mb-8">Antenatal Care</h1>

        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {antenatalCareMenu.map((item) => (
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
        </section>

        {selectedPatient && (
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send Message to Healthcare Provider</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter your message"
            />
            <button
              onClick={handleSendMessage}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default AntenatalCare;
