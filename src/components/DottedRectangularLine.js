import React from 'react';
import './DottedRectangularLine.css';
import ProjectCard from './ProjectCard';

export default function DottedRectangularLine({ selectedCircles }) {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      interests: ['Sustainability'],
      technology: ['Python', 'Angular'],
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      interests: ['Sustainability', 'Finance'],
      technology: ['React', 'HTML/CSS'],
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      interests: ['Finance'],
      technology: ['Java'],
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      interests: ['Design'],
      technology: ['C++'],
    },
    // Add more projects as needed
  ];

  const filteredProjects = projects.filter((project) => {
    const hasMatchingInterests =
      selectedCircles.includes('All Interests') ||
      selectedCircles.some((circle) => project.interests?.includes(circle));
    const hasMatchingTechnology =
      selectedCircles.includes('All Technology') ||
      selectedCircles.some((circle) => project.technology?.includes(circle));
    return hasMatchingInterests || hasMatchingTechnology;
  });

  let message;
  if (selectedCircles.length === 0) {
    message = 'Choose an interest or technology to see projects.';
  } else if (filteredProjects.length === 0) {
    message = 'No projects found with the selected criteria.';
  }

  return (
    <div className="rectangle">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

