import { useState, useEffect } from 'react';

export const useAutofill = (inputRef) => {
  const [isAutofilled, setIsAutofilled] = useState(false);

  useEffect(() => {
    if (!inputRef.current) return;

    const checkAutofill = () => {
      const computedStyle = window.getComputedStyle(inputRef.current);
      setIsAutofilled(computedStyle.webkitBoxShadow?.includes('inset 0 0 0 1000px'));
    };

    // Check for autofill on mount and input changes
    checkAutofill();
    
    const observer = new MutationObserver(checkAutofill);
    observer.observe(inputRef.current, {
      attributes: true,
      attributeFilter: ['style']
    });

    return () => observer.disconnect();
  }, [inputRef]);

  return isAutofilled;
};