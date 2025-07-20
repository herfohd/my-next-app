'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    appointmentType: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `*New Appointment Request*

*Full Name:* ${formData.name}
*Email:* ${formData.email}
*Phone Number:* ${formData.phone}
*Appointment Type:* ${formData.appointmentType || 'Not specified'}
*Subject:* ${formData.subject || 'Not specified'}
*Preferred Date:* ${formData.preferredDate || 'Not specified'}

*Message:*
${formData.message || 'No additional message'}

---
*Sent from Contact Form*`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // WhatsApp URL with the phone number
      const whatsappURL = `https://wa.me/9779807683033?text=${encodedMessage}`;
      
      // Open WhatsApp in a new window
      window.open(whatsappURL, '_blank');

      // Show success message and reset form
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        appointmentType: '',
        preferredDate: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Ready to schedule a consultation or have questions about gastrointestinal surgery? Contact Dr. Pandit and his team for expert medical care.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                  <i className="ri-phone-line text-lg sm:text-xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+977 980-7683033</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                  <i className="ri-mail-line text-lg sm:text-xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-all">narendrapandit111@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0">
                  <i className="ri-time-line text-lg sm:text-xl text-purple-600"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Consultation Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-sm sm:text-base text-gray-600">Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 lg:order-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Schedule Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Appointment Type
                  </label>
                  <div className="relative">
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8"
                    >
                      <option value="">Select appointment type</option>
                      <option value="consultation">General Consultation</option>
                      <option value="surgery">Surgery Consultation</option>
                      <option value="followup">Follow-up Appointment</option>
                      <option value="emergency">Emergency Consultation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Brief subject of your inquiry"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  placeholder="Please describe your medical concerns or questions (max 500 characters)"
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-start sm:items-center">
                  <i className="ri-check-circle-line text-base sm:text-lg mr-2 flex-shrink-0 mt-0.5 sm:mt-0"></i>
                  <span className="text-xs sm:text-sm">Your request has been submitted successfully. We will contact you within 24 hours.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 sm:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-start sm:items-center">
                  <i className="ri-error-warning-line text-base sm:text-lg mr-2 flex-shrink-0 mt-0.5 sm:mt-0"></i>
                  <span className="text-xs sm:text-sm">Please fill in all required fields (Name, Email, Phone Number).</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}