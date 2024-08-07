import React, { useState } from 'react';
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

// Sidebar component for navigation
const Sidebar = () => {
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
};

// Medication and Treatment Form component
const MedicationTreatmentForm = () => {
  const [formData, setFormData] = useState({
    patientRegistrationNumber: '',
    prescriptionDate: '',
    medicationName: '',
    dosage: '',
    frequency: '',
    routeOfAdministration: '',
    startDate: '',
    endDate: '',
    sideEffects: '',
    treatmentPlan: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Medication and Treatment Form</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>Medication and Treatment Form</h1>');
    printWindow.document.write('<table border="1" cellspacing="0" cellpadding="5">');

    Object.keys(formData).forEach(key => {
      printWindow.document.write(`<tr><td><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</strong></td><td>${formData[key]}</td></tr>`);
    });

    printWindow.document.write('</table>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 ml-64 bg-blue-50">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Medication and Treatment Form</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div className="mb-4">
                <label htmlFor="patientRegistrationNumber" className="block text-gray-700">Patient Registration Number</label>
                <input
                  type="text"
                  id="patientRegistrationNumber"
                  name="patientRegistrationNumber"
                  value={formData.patientRegistrationNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="prescriptionDate" className="block text-gray-700">Prescription Date</label>
                <input
                  type="date"
                  id="prescriptionDate"
                  name="prescriptionDate"
                  value={formData.prescriptionDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="medicationName" className="block text-gray-700">Medication Name</label>
                <input
                  type="text"
                  id="medicationName"
                  name="medicationName"
                  value={formData.medicationName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="dosage" className="block text-gray-700">Dosage</label>
                <input
                  type="text"
                  id="dosage"
                  name="dosage"
                  value={formData.dosage}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <div className="mb-4">
                <label htmlFor="frequency" className="block text-gray-700">Frequency</label>
                <input
                  type="text"
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="routeOfAdministration" className="block text-gray-700">Route of Administration</label>
                <input
                  type="text"
                  id="routeOfAdministration"
                  name="routeOfAdministration"
                  value={formData.routeOfAdministration}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="endDate" className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="col-span-2 space-y-4">
              <div className="mb-4">
                <label htmlFor="sideEffects" className="block text-gray-700">Side Effects</label>
                <textarea
                  id="sideEffects"
                  name="sideEffects"
                  value={formData.sideEffects}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="treatmentPlan" className="block text-gray-700">Treatment Plan</label>
                <textarea
                  id="treatmentPlan"
                  name="treatmentPlan"
                  value={formData.treatmentPlan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="additionalNotes" className="block text-gray-700">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                />
              </div>
            </div>

            <div className="col-span-2 flex justify-end gap-4">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
              >
                Print
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default MedicationTreatmentForm;
