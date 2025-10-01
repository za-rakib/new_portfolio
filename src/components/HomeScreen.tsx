import React from 'react';
import { Project } from '../types';
import AppIcon from './AppIcon';

interface HomeScreenProps {
  projects: Project[];
  onAppClick: (project: Project) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ projects, onAppClick }) => {
  const workProjects = projects.filter(p => p.category === 'Work');
  const personalProjects = projects.filter(p => p.category !== 'Work');

  return (
    <div className="p-4 pb-24 max-h-full overflow-y-auto text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Welcome</h1>
        <p className="text-gray-400">Explore my projects</p>
      </div>

      {workProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Work Projects</h2>
          <div className="grid grid-cols-4 gap-4">
            {workProjects.map((project, index) => (
              <div
                key={project.id}
                className={`animate-fade-in-up stagger-${(index % 12) + 1} opacity-0`}
              >
                <AppIcon project={project} onClick={() => onAppClick(project)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {personalProjects.length > 0 && (
         <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Personal Projects</h2>
          <div className="grid grid-cols-4 gap-4">
            {personalProjects.map((project, index) => (
               <div
                key={project.id}
                className={`animate-fade-in-up stagger-${(index % 12) + 1 + workProjects.length} opacity-0`}
              >
                <AppIcon project={project} onClick={() => onAppClick(project)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;