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
      className="flex flex-col items-center w-36 h-24 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-1"
    >
      <div className="text-4xl mb-2">{project.icon}</div>
      <span className="text-sm text-center font-medium">{project.name}</span>
    </button>
  );
};

export default AppIcon;