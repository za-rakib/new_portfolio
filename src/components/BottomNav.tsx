import React from 'react';

interface BottomNavProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { key: 'home', icon: '🏠', label: 'Home' },
    { key: 'about', icon: '👤', label: 'About' },
    { key: 'projects', icon: '📁', label: 'Projects' },
    { key: 'contact', icon: '📧', label: 'Contact' },
    { key: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 flex justify-around py-2 px-4">
      {navItems.map(item => (
        <button
          key={item.key}
          onClick={() => onViewChange(item.key)}
          className={`flex flex-col items-center transition-all duration-200 hover:scale-110 hover:text-purple-500 p-2 rounded-lg ${
            currentView === item.key ? 'text-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50' : 'text-gray-400'
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-xs mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;