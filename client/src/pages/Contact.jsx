import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Contact Us
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Have any questions, feedback, or partnership ideas? We'd love to hear from you.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Or email us at{' '}
          <a href="mailto:support@checkmyskin.ai" className="text-blue-600 hover:underline">
            support@checkmyskin.ai
          </a>
        </div>
      </div>
    </div>
  );
}
