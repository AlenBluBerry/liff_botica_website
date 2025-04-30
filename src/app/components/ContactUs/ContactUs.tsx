'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    query: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919579491337'; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(formData.query);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 my-10">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-600 dark:text-gray-300">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-300">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm text-gray-600 dark:text-gray-300">Your Query</label>
          <textarea
            id="query"
            name="query"
            rows={4}
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-500 text-white">
          Send to WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
