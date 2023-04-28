import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

  const resizeHandler = () => {
    const windowSizeObj = { width: window.innerWidth, height: window.innerHeight };
    setWindowSize(windowSizeObj);
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
