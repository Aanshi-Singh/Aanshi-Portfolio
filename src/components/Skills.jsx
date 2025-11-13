import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const skills = entry.target.querySelectorAll('.skill-item');
            skills.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('animate-in');
              }, index * 100);
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

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React JS',
    'TypeScript',
    'Tailwind',
    'OOPs',
    'Responsive Web Design- UI/UX',
    'Integrating REST Api',
    'Testing and Debugging'
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

