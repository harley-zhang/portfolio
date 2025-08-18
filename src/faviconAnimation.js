

function ensureFaviconLink() {
  return (
    document.querySelector("link[rel='icon']") ||
    (function () {
      const link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
      return link;
    })()
  );
}

export function startGlobeFaviconAnimation({ frameDelay = 600, isDark = false } = {}) {
  const favicon = ensureFaviconLink();

  const angles = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
  let idx = 0;

  const createGlobeSvg = (angleDeg) => {
    const meridians = [];
    const strokeColor = isDark ? 'white' : 'black';
    
    for (let i = 0; i < 4; i++) {
      const meridianAngle = (angleDeg + i * 90) % 360;
      const radians = (meridianAngle * Math.PI) / 180;
      
      const sinAngle = Math.sin(radians);
      const cosAngle = Math.cos(radians);
      
      if (cosAngle >= -0.1) {
        const curveAmount = sinAngle * 26;
        const opacity = Math.max(0.4, (cosAngle + 0.1) / 1.1);
        
        meridians.push(`
          <path d='M32 4 Q${32 + curveAmount} 32 32 60' 
                fill='none' stroke='${strokeColor}' stroke-width='1.5' 
                opacity='${opacity.toFixed(2)}'/>
        `);
      }
    }
    
    return `
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
        <circle cx='32' cy='32' r='28' fill='none' stroke='${strokeColor}' stroke-width='2'/>
        <line x1='4'  y1='22' x2='60' y2='22' stroke='${strokeColor}' stroke-width='1.5' />
        <line x1='4'  y1='42' x2='60' y2='42' stroke='${strokeColor}' stroke-width='1.5' />
        ${meridians.join('')}
      </svg>`;
  };

  const update = () => {
    const svg = createGlobeSvg(angles[idx]);
    favicon.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    idx = (idx + 1) % angles.length;
  };

  update();
  const interval = setInterval(update, frameDelay);
  return () => clearInterval(interval);
}
