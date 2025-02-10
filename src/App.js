import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;
