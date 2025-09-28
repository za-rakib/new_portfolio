import React from 'react';
import HomeScreen from './HomeScreen';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onAppClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = (props) => <HomeScreen {...props} />;

export default Projects;