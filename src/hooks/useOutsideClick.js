import { useEffect } from 'react';

export const useOutsideClick = (ref, setVisible) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
