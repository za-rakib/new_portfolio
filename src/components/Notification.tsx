import React from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => (
  <div className="absolute top-16 left-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl shadow-xl shadow-purple-500/50 z-20 animate-slide-in-down border border-white/20 backdrop-blur-sm">
    <div className="flex items-start space-x-3">
      <span className="text-2xl mt-1">🚀</span>
      <div className="flex-1">
        <p className="font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white text-xl hover:scale-110 transition-all p-1 rounded-full hover:bg-white/10"
      >
        ×
      </button>
    </div>
  </div>
);

export default Notification;