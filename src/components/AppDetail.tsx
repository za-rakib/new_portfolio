import React from 'react';
import { Project } from '../types';

interface AppDetailProps {
  project: Project;
  onClose: () => void;
}

const AppDetail: React.FC<AppDetailProps> = ({ project, onClose }) => {
  return (
    <div className="p-4 h-full overflow-y-auto bg-white">
      <button onClick={onClose} className="mb-4 text-blue-500 hover:text-blue-700 transition-colors">← Back</button>
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{project.icon}</span>
        <h2 className="text-2xl font-bold">{project.name}</h2>
      </div>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Screenshots</h3>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {project.screenshots.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
              Screenshot {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Links</h3>
        {project.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline mb-1">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppDetail;