import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

/**
 * Reveal
 * Lightweight scroll-triggered animation wrapper.
 * Adds a "reveal-visible" class once the element enters the viewport.
 * Combine with the "stagger-children" class to animate a grid's
 * children one after another (see Reveal.css).
 */
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
