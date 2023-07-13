import React from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import './ProjectsPage.css';
import NewProjects from './NewProjects';

function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <NewProjects />
    </div>
  );
}

export default ProjectsPage;
