import React, { useEffect, useState } from 'react';

type Dimentions = {
  width: number;
  height: number;
};

const getViewportSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useViewportDimentions = (): Dimentions => {
  const [dimentions, setDimentions] = useState<Dimentions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimentions(getViewportSize);

    const updateDimentions = (event?: UIEvent) => {
      if (event.target !== window) return;
      setDimentions(getViewportSize());
    };

    window.addEventListener('resize', updateDimentions);

    return () => {
      window.removeEventListener('resize', updateDimentions);
    };
  }, []);

  return dimentions;
};
