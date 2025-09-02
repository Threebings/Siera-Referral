import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    // Referrer Information
    referrerName: '',
    providerNumber: '',
    
    phoneNumber: '',
    emailAddress: '',
    address: '',
    postCode: '',
    country: '',
    
    // Patient Information
    patientFirstName: '',
    patientLastName: '',
    dateOfBirth: '',
    phoneNumberPatient: '',
    email: '',
    gender: '',
    
    // Additional fields
    reasonForReferral: '',
    clinicalParticulars: '',
    clinicSelection: '',
    searchClinic: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-lg px-6 py-4 border-b border-gray-200">
          <h1 className="text-base font-normal text-blue-600">Si Referral Companion</h1>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Referrer Information Section */}
            <div>
              <h2 className="text-sm font-normal text-gray-700 mb-4">
                Referrer Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Referrer Name *
                  </label>
                  <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleInputChange}
                    placeholder="Enter First Full Name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Provider Number
                  </label>
                  <input
                    type="text"
                    name="providerNumber"
                    value={formData.providerNumber}
                    onChange={handleInputChange}
                    placeholder="Provider Number"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. +61 2 1234 5678"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Add email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Practice Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Post Code
                  </label>
                  <input
                    type="text"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleInputChange}
                    placeholder="Post Code"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Country</option>
                    <option value="AU">Australia</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="NZ">New Zealand</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Patient Information Section */}
            <div>
              <h2 className="text-sm font-normal text-gray-700 mb-4">
                Patient Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Patient First Name *
                  </label>
                  <input
                    type="text"
                    name="patientFirstName"
                    value={formData.patientFirstName}
                    onChange={handleInputChange}
                    placeholder="Patient First Name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    placeholder="dd/mm/yyyy"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Patient Last Name *
                  </label>
                  <input
                    type="text"
                    name="patientLastName"
                    value={formData.patientLastName}
                    onChange={handleInputChange}
                    placeholder="Patient Last Name"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumberPatient"
                    value={formData.phoneNumberPatient}
                    onChange={handleInputChange}
                    placeholder="e.g. +61 2 1234 5678"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Gender Selection */}
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-2">
                  Gender Type *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-gray-700">Male/Unspecified</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-gray-700">Female/Unspecified</span>
                  </label>
                </div>
              </div>

              {/* Reason for Referral */}
              <div className="mt-6">
                <label className="block text-xs text-gray-600 mb-1">
                  Reason for Referral
                </label>
                <select
                  name="reasonForReferral"
                  value={formData.reasonForReferral}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select a service...</option>
                  <option value="physiotherapy">Physiotherapy</option>
                  <option value="occupational-therapy">Occupational Therapy</option>
                  <option value="exercise-physiology">Exercise Physiology</option>
                  <option value="dietitian">Dietitian</option>
                  <option value="psychology">Psychology</option>
                  <option value="podiatry">Podiatry</option>
                  <option value="speech-pathology">Speech Pathology</option>
                  <option value="social-work">Social Work</option>
                  <option value="chiropractic">Chiropractic</option>
                  <option value="osteopathy">Osteopathy</option>
                  <option value="massage-therapy">Massage Therapy</option>
                  <option value="hydrotherapy">Hydrotherapy</option>
                </select>
              </div>

              {/* Medical Investigation & Imaging */}
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1">
                  Attach Investigation & Imaging
                </label>
                <div className="text-right mb-2">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-xs underline"
                  >
                    Choose files for this section
                  </button>
                </div>
              </div>

              {/* Clinical Particulars */}
              <div className="mt-4">
                <label className="block text-xs text-gray-600 mb-1">
                  Reason for Referral - Clinical Particulars
                </label>
                <textarea
                  name="clinicalParticulars"
                  value={formData.clinicalParticulars}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe the clinical condition and reason for referral"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-vertical"
                />
              </div>
            </div>

            {/* Clinic Selection Section */}
            <div>
              <h2 className="text-sm font-normal text-gray-700 mb-4">
                Clinic Selection
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Allied Health Clinic Selection
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="searchClinic"
                      value={formData.searchClinic}
                      onChange={handleInputChange}
                      placeholder="Search by postcode"
                      className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <select
                    name="clinicSelection"
                    value={formData.clinicSelection}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="">-- Select a clinic --</option>
                    <option value="clinic1">Siera Medical Centre - Sydney</option>
                    <option value="clinic2">Siera Specialist Clinic - Melbourne</option>
                    <option value="clinic3">Siera Health Hub - Brisbane</option>
                    <option value="clinic4">Siera Care Centre - Perth</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-normal transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
          
          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50 rounded-b-lg border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © Siera Referral Companion 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;