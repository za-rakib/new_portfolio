'use client';

import React, { useState, useEffect } from 'react';
import TabletFrame from '../components/TabletFrame';
import HomeScreen from '../components/HomeScreen';
import AppDetail from '../components/AppDetail';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Settings from '../components/Settings';
import BottomNav from '../components/BottomNav';
import Notification from '../components/Notification';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'ott',
    name: 'StreamHub',
    icon: '📺',
    description: 'An OTT platform for streaming movies and TV shows with personalized recommendations.',
    screenshots: ['img1', 'img2', 'img3'],
    links: [{ label: 'GitHub', url: 'https://github.com' }, { label: 'Demo', url: 'https://demo.com' }],
    category: 'Work'
  },
  {
    id: 'iot',
    name: 'SmartHome IoT',
    icon: '🏠',
    description: 'IoT project for smart home automation, controlling lights, temperature, and security.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  },
  {
    id: 'rmg',
    name: 'RMG Tools',
    icon: '⚙️',
    description: 'Productivity tools for the Ready Made Garments industry, including inventory and order management.',
    screenshots: ['img1'],
    links: [{ label: 'GitHub', url: '#' }]
  },
  {
    id: 'ecommerce',
    name: 'ShopEase',
    icon: '🛒',
    description: 'E-commerce app with seamless shopping experience and secure payments.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  },
  {
    id: 'social',
    name: 'ConnectApp',
    icon: '👥',
    description: 'Social media platform for connecting with friends and sharing moments.',
    screenshots: ['img1'],
    links: [{ label: 'GitHub', url: '#' }]
  },
  {
    id: 'fitness',
    name: 'FitTrack',
    icon: '💪',
    description: 'Fitness tracking app with workout plans and progress monitoring.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  },
  {
    id: 'travel',
    name: 'TripPlanner',
    icon: '✈️',
    description: 'Travel planning app with itinerary management and booking features.',
    screenshots: ['img1'],
    links: [{ label: 'GitHub', url: '#' }]
  },
  {
    id: 'music',
    name: 'TuneIn',
    icon: '🎵',
    description: 'Music streaming app with offline downloads and playlist creation.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  },
  {
    id: 'news',
    name: 'NewsFlash',
    icon: '📰',
    description: 'News aggregator app with personalized feeds and real-time updates.',
    screenshots: ['img1'],
    links: [{ label: 'GitHub', url: '#' }]
  },
  {
    id: 'finance',
    name: 'BudgetBuddy',
    icon: '💰',
    description: 'Personal finance app for budgeting and expense tracking.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  },
  {
    id: 'education',
    name: 'LearnHub',
    icon: '📚',
    description: 'Educational platform with courses and interactive learning modules.',
    screenshots: ['img1'],
    links: [{ label: 'GitHub', url: '#' }]
  },
  {
    id: 'gaming',
    name: 'GameZone',
    icon: '🎮',
    description: 'Gaming app with multiplayer features and leaderboards.',
    screenshots: ['img1', 'img2'],
    links: [{ label: 'GitHub', url: '#' }, { label: 'Demo', url: '#' }]
  }
];

export default function Home() {
  const [view, setView] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  let content;
  if (view === 'detail') {
    content = <AppDetail project={selectedProject!} onClose={() => setView('home')} />;
  } else if (view === 'home') {
    content = <HomeScreen projects={projects} onAppClick={(p) => { setSelectedProject(p); setView('detail'); }} />;
  } else if (view === 'about') {
    content = <About />;
  } else if (view === 'projects') {
    content = <Projects projects={projects} onAppClick={(p) => { setSelectedProject(p); setView('detail'); }} />;
  } else if (view === 'contact') {
    content = <Contact />;
  } else if (view === 'settings') {
    content = <Settings />;
  }

  return (
    <TabletFrame>
      <div className="relative h-full">
        <div key={view} className="animate-slide-in-right h-full">
          {content}
        </div>
        {view !== 'detail' && <BottomNav currentView={view} onViewChange={setView} />}
        {showNotification && <Notification message="Rakib just launched a new IoT project :rocket:" onClose={() => setShowNotification(false)} />}
      </div>
    </TabletFrame>
  );
}