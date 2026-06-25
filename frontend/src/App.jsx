import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ALifeFeature from './components/ALifeFeature';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Blog from './components/Blog';
import Creative from './components/Creative';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme is managed by ThemeProvider in main.jsx — no local state needed here.
  // The ThemeProvider applies 'dark' class to <html> and Tailwind dark: variants do the rest.
  return (
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
          <Blog />
          <Creative />
          <Contact />
        </main>
        <Footer />
      </Router>
    </div>
  );
}
