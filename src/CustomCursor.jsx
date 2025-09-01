import { useEffect, useRef, useState } from 'react';

const TEXT_LIKE_SELECTORS = 'p, h1, h2, h3, h4, h5, h6, li, small, blockquote, cite, code, pre, span, a, label, dd, dt, figcaption';

function CustomCursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || (navigator.maxTouchPoints ?? 0) > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }

    const handleMouseMove = (event) => {
      positionRef.current = { x: event.clientX, y: event.clientY };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const el = cursorRef.current;
          if (el) {
            el.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)`;
          }
          rafRef.current = null;
        });
      }

      const target = event.target;
      const overFocusBox = Boolean(target && target.closest && target.closest('.focus-corners'));
      const overText = Boolean(target && target.closest && target.closest(TEXT_LIKE_SELECTORS));

      // Hide entirely over any green-corner focus box
      setIsVisible(!overFocusBox);
      // Only morph to text rectangle when not over focus boxes
      setIsText(!overFocusBox && overText);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isText ? 'is-text' : ''} ${isVisible ? 'is-visible' : 'is-hidden'}`}
    />
  );
}

export default CustomCursor;

 