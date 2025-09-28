import React from 'react';
import { Project } from '../types';

interface AppIconProps {
  project: Project;
  onClick: () => void;
}

const AppIcon: React.FC<AppIconProps> = ({ project, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center w-36 h-24 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-2 border border-gray-100"
    >
      <div className="text-4xl mb-2 drop-shadow-sm">{project.icon}</div>
      <span className="text-sm text-center font-medium text-gray-800">{project.name}</span>
    </button>
  );
};

export default AppIcon;