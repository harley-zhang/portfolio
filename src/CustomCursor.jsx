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

    // Hide cursor when mouse leaves the document/viewport
    const handleMouseLeaveDocument = (event) => {
      // Check if the mouse is actually leaving the document
      if (!event.relatedTarget || event.relatedTarget.nodeName === 'HTML') {
        setIsVisible(false);
      }
    };

    const handleMouseEnterDocument = () => {
      setIsVisible(true);
    };

    // Hide cursor when the window/tab loses focus, show it again on focus
    const handleWindowBlur = () => setIsVisible(false);
    const handleWindowFocus = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseenter', handleMouseEnterDocument);
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveDocument);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveDocument);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
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

 