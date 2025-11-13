import { useEffect, useRef } from 'react';
import './Awards.css';

const Awards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const awards = entry.target.querySelectorAll('.award-item');
            awards.forEach((award, index) => {
              setTimeout(() => {
                award.classList.add('animate-in');
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

  const awards = [
    {
      year: '2022',
      title: 'Code Hunter',
      prize: 'First Prize'
    },
    {
      year: '2021',
      title: 'Scavenger Hunt-Coding Contest',
      prize: 'First Prize'
    }
  ];

  return (
    <section id="awards" className="awards-section" ref={sectionRef}>
      <h2 className="section-title">AWARDS & HONORS</h2>
      <div className="awards-container">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <div className="award-year">{award.year}</div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <span className="award-prize">{award.prize}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

