import React from 'react';

export default function ResearchSection() {
  return (
    <section>
      <h2>Research</h2>
      <ul>
        <li>
          <a href="https://tech.cornell.edu" target="_blank" rel="noopener noreferrer">
            Cornell Tech
          </a>{' '}– LLM geocoding and mapping for news data
        </li>
        <li>
          <a href="https://www.berkeley.edu" target="_blank" rel="noopener noreferrer">
            University of California, Berkeley
          </a>{' '}– 3D brain viewing models from scans
        </li>
        <li>
          <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer">
            Yale University
          </a>{' '}– Climate and vegetation simulation modelling
          <div className="yale-project">
            <img src="/graphs.png" alt="graphs" />
            <div>
              <a
                href="/sagebrush.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'blue' }}
              >
                Computational Modeling of Climate Change Impacts on Sagebrush Ecosystems
              </a>
              <br />
              <small>Ryan Dougherty, Harley Zhang</small>
            </div>
          </div>
        </li>
        <li>
          <a href="https://www.utoronto.ca" target="_blank" rel="noopener noreferrer">
            University of Toronto
          </a>{' '}– Machine learning for land cover classification
        </li>
      </ul>
    </section>
  );
} 