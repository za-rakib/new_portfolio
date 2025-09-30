import React from 'react';

const Contact: React.FC = () => (
  <div className="p-6 pb-24 max-h-full overflow-y-auto">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Get In Touch</h2>

    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">📧</span> Email
        </h3>
        <a
          href="mailto:rakib.dev70@gmail.com"
          className="text-purple-600 hover:text-purple-800 text-lg font-medium transition-colors"
        >
          rakib.dev70@gmail.com
        </a>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">📱</span> Phone
        </h3>
        <a
          href="tel:+8801716665606"
          className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
        >
          +880 1716 665 606
        </a>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-500">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">📍</span> Location
        </h3>
        <p className="text-gray-700 text-lg">Dhaka, Bangladesh</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="https://linkedin.com/in/rakib-hossen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-2xl">💼</span>
          <span className="font-semibold">LinkedIn</span>
        </a>

        <a
          href="https://github.com/za-rakib"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-2xl">💻</span>
          <span className="font-semibold">GitHub</span>
        </a>

        <a
          href="https://codeforces.com/profile/rakib"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-2xl">🏆</span>
          <span className="font-semibold">Codeforces</span>
        </a>

        <a
          href="#"
          className="bg-purple-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span className="text-2xl">📄</span>
          <span className="font-semibold">Portfolio</span>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;