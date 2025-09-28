import React from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => (
  <div className="absolute top-16 left-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg shadow-purple-500/50 z-20 animate-slide-in-down">
    {message}
    <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl hover:scale-110 transition-transform">×</button>
  </div>
);

export default Notification;