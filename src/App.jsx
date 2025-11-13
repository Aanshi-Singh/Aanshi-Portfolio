import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'education', 'skills', 'awards'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Aanshi Singh</div>
          <ul className="nav-menu">
            <li>
              <button
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={() => scrollToSection('hero')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
           
          </ul>
        </div>
      </nav>

      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Awards />

      <footer className="footer">
        <p>&copy; Created with ❤️ by Aanshi Singh</p>
      </footer>
    </div>
  );
}

export default App;
