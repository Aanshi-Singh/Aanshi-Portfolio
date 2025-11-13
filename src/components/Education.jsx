import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
  const sectionRef = useRef(null);

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

  const education = [
    {
      degree: 'Bachelor of Engineering, Computer Engineering',
      institution: 'Xavier Institute of Engineering',
      grade: 'CGPA: 9.12/10.0',
      period: '2019 - 2023'
    },
    {
      degree: 'Higher Secondary Certificate',
      specialization: 'Physics, Chemistry, and Maths',
      institution: 'Kendriya Vidyalaya Ambernath',
      grade: 'Grade: 82.2%',
      period: '2018 - 2019'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Kendriya Vidyalaya Ambernath',
      grade: 'CGPA: 9.8/10.0',
      period: '2016 - 2017'
    }
  ];

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{edu.degree}</h3>
            {edu.specialization && (
              <p className="specialization">{edu.specialization}</p>
            )}
            <p className="institution">{edu.institution}</p>
            <div className="education-meta">
              <span className="grade">{edu.grade}</span>
              <span className="period">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

