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

// Sidebar component
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

function PatientVisitForm() {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    generalHealth: '',
    obstetricHistory: '',
    fetalHeartRate: '',
    systolicBloodPressure: '',
    diastolicBloodPressure: '',
    weight: '',
    growthMeasurements: '',
    urinalysisProtein: '',
    urinalysisGlucose: '',
    hemoglobinLevels: '',
    hematocritLevels: '',
    bloodSugarLevels: '',
    chronicConditions: '',
    allergies: '',
    currentMedications: '',
    recentHospitalizations: '',
    smokingStatus: '',
    alcoholConsumption: '',
    exerciseRoutine: '',
    mentalHealthStatus: '',
    moodAssessment: '',
    stressLevel: '',
    additionalObservations: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactNumber: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    nextScheduledVisit: '',
    recommendedTests: '',
    patientEducation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Implement form submission logic here
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Patient Visit Form</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<h1>Patient Visit Form</h1>');
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
      <main className="flex-1 bg-blue-50 p-8 ml-64">
        <h1 className="text-3xl font-bold mb-8">Patient Visit Form</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Patient Identification */}
          <div className="col-span-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md" // Adjusted width here
              required
            />
          </div>

          {/* General Health Assessment */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Overall Health Status</label>
            <textarea
              name="generalHealth"
              value={formData.generalHealth}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Any Complaints or Symptoms</label>
            <textarea
              name="complaintsSymptoms"
              value={formData.complaintsSymptoms}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Obstetric History */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Obstetric History</label>
            <textarea
              name="obstetricHistory"
              value={formData.obstetricHistory}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Fetal Heart Rate Monitoring */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Fetal Heart Rate Readings</label>
            <input
              type="text"
              name="fetalHeartRate"
              value={formData.fetalHeartRate}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Blood Pressure Monitoring */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Blood Pressure</label>
            <input
              type="text"
              name="systolicBloodPressure"
              placeholder="Systolic"
              value={formData.systolicBloodPressure}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="diastolicBloodPressure"
              placeholder="Diastolic"
              value={formData.diastolicBloodPressure}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Weight and Growth Monitoring */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Growth Measurements</label>
            <input
              type="text"
              name="growthMeasurements"
              value={formData.growthMeasurements}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Urinalysis */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Urinalysis</label>
            <input
              type="text"
              name="urinalysisProtein"
              placeholder="Protein Level"
              value={formData.urinalysisProtein}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="urinalysisGlucose"
              placeholder="Glucose Level"
              value={formData.urinalysisGlucose}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Blood Tests */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Blood Tests</label>
            <input
              type="text"
              name="hemoglobinLevels"
              placeholder="Hemoglobin Levels"
              value={formData.hemoglobinLevels}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="hematocritLevels"
              placeholder="Hematocrit Levels"
              value={formData.hematocritLevels}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="bloodSugarLevels"
              placeholder="Blood Sugar Levels"
              value={formData.bloodSugarLevels}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Additional Information */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Chronic Conditions</label>
            <input
              type="text"
              name="chronicConditions"
              value={formData.chronicConditions}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Known Allergies</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Current Medications</label>
            <input
              type="text"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Recent Hospitalizations</label>
            <input
              type="text"
              name="recentHospitalizations"
              value={formData.recentHospitalizations}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Smoking Status</label>
            <input
              type="text"
              name="smokingStatus"
              value={formData.smokingStatus}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Alcohol Consumption</label>
            <input
              type="text"
              name="alcoholConsumption"
              value={formData.alcoholConsumption}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Exercise Routine</label>
            <input
              type="text"
              name="exerciseRoutine"
              value={formData.exerciseRoutine}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mental Health Status</label>
            <input
              type="text"
              name="mentalHealthStatus"
              value={formData.mentalHealthStatus}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mood Assessment</label>
            <input
              type="text"
              name="moodAssessment"
              value={formData.moodAssessment}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Stress Level</label>
            <input
              type="text"
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Additional Observations</label>
            <textarea
              name="additionalObservations"
              value={formData.additionalObservations}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Emergency Contact Relationship</label>
            <input
              type="text"
              name="emergencyContactRelationship"
              value={formData.emergencyContactRelationship}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Emergency Contact Number</label>
            <input
              type="text"
              name="emergencyContactNumber"
              value={formData.emergencyContactNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Insurance Provider</label>
            <input
              type="text"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Insurance Policy Number</label>
            <input
              type="text"
              name="insurancePolicyNumber"
              value={formData.insurancePolicyNumber}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Next Scheduled Visit</label>
            <input
              type="date"
              name="nextScheduledVisit"
              value={formData.nextScheduledVisit}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Recommended Tests</label>
            <input
              type="text"
              name="recommendedTests"
              value={formData.recommendedTests}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Patient Education</label>
            <input
              type="text"
              name="patientEducation"
              value={formData.patientEducation}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              style={{ padding: '0.5rem 1rem' }} // Shorter padding
              className="bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handlePrint}
              style={{ padding: '0.5rem 1rem' }} // Shorter padding
              className="bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Print
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default PatientVisitForm;
