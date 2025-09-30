import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  return (
    <div className="p-6 pb-24 max-h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Settings</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-3">🎨</span> Appearance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-purple-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-3">🔔</span> Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Sound</span>
              <button
                onClick={() => setSound(!sound)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  sound ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    sound ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-3">🔄</span> Updates
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Auto Update Apps</span>
              <button
                onClick={() => setAutoUpdate(!autoUpdate)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoUpdate ? 'bg-orange-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoUpdate ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-3">ℹ️</span> About
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Developer:</strong> Rakib Hossen</p>
            <p><strong>Last Updated:</strong> December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;