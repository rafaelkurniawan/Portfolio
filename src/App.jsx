import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experiences from './pages/Experiences/Experiences';
import Projects from './pages/Projects/Projects';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="bg-gray-900 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
