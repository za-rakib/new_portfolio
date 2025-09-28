import React from "react";

interface BottomNavProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { key: "home", icon: "🏠", label: "Home" },
    { key: "about", icon: "👤", label: "About" },
    { key: "projects", icon: "📁", label: "Projects" },
    { key: "contact", icon: "📧", label: "Contact" },
    { key: "settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-5 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700/60 shadow-xl shadow-black/40">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onViewChange(item.key)}
          className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group ${
            currentView === item.key
              ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white scale-110 shadow-lg shadow-purple-500/40"
              : "bg-gray-800/70 text-gray-400 hover:text-purple-400 hover:scale-110"
          }`}
        >
          {/* Icon */}
          <span className="text-xl">{item.icon}</span>

          {/* Label (only visible when active or hover) */}
          <span
            className={`absolute -top-7 text-xs px-2 py-1 rounded-md backdrop-blur-sm border text-gray-200 bg-gray-800/70 border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              currentView === item.key ? "opacity-100" : ""
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
