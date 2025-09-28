import React from 'react';
import { Project } from '../types';
import AppIcon from './AppIcon';

interface HomeScreenProps {
  projects: Project[];
  onAppClick: (project: Project) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ projects, onAppClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 py-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`animate-fade-in-up stagger-${(index % 12) + 1} opacity-0`}
        >
          <AppIcon project={project} onClick={() => onAppClick(project)} />
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;