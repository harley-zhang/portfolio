import './Background.css';

function Background() {
  return (
    <div className="background">
      <div className="blob-container">
        <div className="blob orange"></div>
        <div className="blob turquoise"></div>
        <div className="blob yellow"></div>
      </div>
      <div className="noise-filter"></div>
      
      <svg style={{ display: 'none' }}>
        <filter id='noiseFilter'>
          <feTurbulence 
            type='fractalNoise' 
            baseFrequency='0.6' 
            stitchTiles='stitch'/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        </filter>
      </svg>
    </div>
  );
}

export default Background;