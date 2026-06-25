import { HashRouter as Router } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ALifeFeature from './components/ALifeFeature';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-black text-black dark:text-white font-body transition-colors duration-300 min-h-screen">
        <Router>
          <Navbar />
          <main>
            <Hero />
            <About />
            <ALifeFeature />
            <Projects />
            <Skills />
            <Research />
            <Creative />
            <Contact />
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
