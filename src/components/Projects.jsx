import { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      name: 'Command Center',
      description: 'Built on REMIX architecture with RESTful APIs for Downloads, Govern, and Payment Links. Achieved 75% unit test coverage with route-based management and React Hook Form.'
    },
    {
      name: 'Weather forecasting App',
      description: 'Real-time weather updates for 200,000+ cities using React.js and OpenWeather API. Features responsive UI with 99% forecast accuracy and interactive search functionality.'
    },
    {
      name: 'Airline System Management',
      description: 'Comprehensive system for flight bookings, passenger management, and operations. Includes real-time seat availability, booking management, and administrative dashboard.'
    },
    {
      name: 'Movie Website',
      description: 'Modern movie database platform with listings, trailers, and reviews. Responsive design with search and filtering for seamless movie discovery across devices.'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  // Calculate which projects to display (always show 3: prev, current, next)
  const getDisplayProjects = () => {
    const display = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      const position = i; // -1 = left, 0 = center, 1 = right
      display.push({ ...projects[index], position, originalIndex: index });
    }
    return display;
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className="section-title">PROJECTS</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevProject} aria-label="Previous project">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {getDisplayProjects().map((project, idx) => (
              <div 
                key={`${project.originalIndex}-${idx}`} 
                className={`project-card ${project.position === 0 ? 'active' : 'inactive'}`}
              >
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button next" onClick={nextProject} aria-label="Next project">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
