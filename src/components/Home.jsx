import React from 'react';
import Intro from './Intro';
import ResearchSection from './ResearchSection';

export default function Home() {
  return (
    <main className="container">
      <Intro />
      <ResearchSection />
      <footer className="footer">
        <a href="https://github.com/harley-zhang" target="_blank" rel="noopener noreferrer">GitHub</a>
        {' | '}
        <a href="https://www.linkedin.com/in/harley-zhang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  );
} 