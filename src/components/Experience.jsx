import { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const [selectedExp, setSelectedExp] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Animate timeline items with delay
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 200);
            });
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

  const experiences = [
    {
      title: 'Software Developer - Frontend',
      company: 'Nimbbl.biz',
      period: 'Jan 2024 - Sept 2025',
      projects: 'Sonic Shop, Nimbbl Checkout',
      achievements: [
        'Engineered Sonic Shop, a responsive checkout gateway with tutorial view, optimizing QA processes by cutting testing efforts by 20%, and enabling sales team to demo checkout 2x faster for prospective clients, investors etc.',
        'Reduced user-facing errors by 20% and provided data-driven insights into user behavior and payment preferences by developing a robust event-tracking system.',
        'Built a unit testing infrastructure with 85% coverage using React Testing Library.',
        'Launched the EMI payment method, featuring seamless user interaction and saved card functionality, which reduced checkout time by 30% and decreased clicks per transaction.',
        'Enhanced UPI payments for over 10,000 transactions, integrating intuitive icons and clear text, and implemented the UPI Intent flow for a seamless experience.'
      ],
      technologies: ['Redux', 'Debounce', 'Context API', 'TypeScript', 'Tailwind', 'Docusaurus', 'JIRA', 'React Testing Library']
    },
    {
      title: 'Software Developer - Frontend Intern',
      company: 'Nimbbl.biz',
      period: 'Oct 2023 - Jan 2024',
      achievements: [
        'Developed a WIX store plugin webpage, serving over 100 users and enhancing accessibility on nimbbl.biz.',
        'Redesigned the Spur dashboard with Tailwind, which boosted UI consistency and increased component reusability by 10%, thereby reducing development time.',
        'Refined code efficiency by 15% through bug fixes, design enhancements, and refactoring, resolving high-priority tickets to improve system stability.'
      ],
      technologies: ['Redux', 'RESTful API', 'Debounce', 'Context API', 'TypeScript', 'Tailwind', 'Docusaurus', 'JIRA', 'Bitbucket', 'Figma']
    }
  ];

  const openModal = (exp) => {
    setSelectedExp(exp);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExp(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedExp) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedExp]);

  return (
    <>
      <section id="experience" className="experience-section" ref={sectionRef}>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => openModal(exp)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title ">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                {exp.projects && (
                  <div className="timeline-projects">
                    <strong>Projects:</strong>{' '}
                    {exp.projects.split(', ').map((project, idx, arr) => (
                      <span key={idx}>
                        {project === 'Sonic Shop' ? (
                          <a 
                            href="https://sonicshop.nimbbl.tech/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Sonic Shop
                          </a>
                        ) : (
                          project
                        )}
                        {idx < arr.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                )}
                <div className="timeline-preview">
                  Click to view details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedExp && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2 className="modal-title">{selectedExp.title}</h2>
              <div className="modal-meta">
                <span className="modal-company">{selectedExp.company}</span>
                <span className="modal-period">{selectedExp.period}</span>
              </div>
              {selectedExp.projects && (
                <div className="modal-projects">
                  <strong>Projects:</strong>{' '}
                  {selectedExp.projects.split(', ').map((project, idx, arr) => (
                    <span key={idx}>
                      {project === 'Sonic Shop' ? (
                        <a 
                          href="https://sonicshop.nimbbl.tech/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Sonic Shop
                        </a>
                      ) : (
                        project
                      )}
                      {idx < arr.length - 1 && ', '}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-body">
              <div className="modal-achievements">
                <h3>Key Achievements:</h3>
                <ul>
                  {selectedExp.achievements.map((achievement, idx) => {
                    let result = [];
                    let remainingText = achievement;
                    
                    // First, handle "Sonic Shop" link
                    if (remainingText.includes('"Sonic Shop"')) {
                      const sonicShopParts = remainingText.split('"Sonic Shop"');
                      result.push(sonicShopParts[0]);
                      result.push(
                        <a 
                          key="sonic-shop"
                          href="https://sonicshop.nimbbl.tech/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          "Sonic Shop"
                        </a>
                      );
                      remainingText = sonicShopParts[1];
                    }
                    
                    // Then, handle "nimbbl.biz" link
                    if (remainingText.includes('nimbbl.biz')) {
                      const nimbblParts = remainingText.split('nimbbl.biz');
                      result.push(nimbblParts[0]);
                      result.push(
                        <a 
                          key="nimbbl"
                          href="https://nimbbl.biz/wix-payment-gateway" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          nimbbl.biz
                        </a>
                      );
                      result.push(nimbblParts[1]);
                    } else {
                      result.push(remainingText);
                    }
                    
                    return (
                      <li key={idx}>
                        {result.length > 0 ? result : achievement}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="modal-technologies">
                <h3>Technologies:</h3>
                <div className="tech-tags">
                  {selectedExp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
