import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Metrics />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Footer />
    </div>
  );
}

export default App;
