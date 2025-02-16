import { useState, useEffect } from "react";

interface WindowSize {
    width: number | undefined;
}

export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: undefined,
    });

    useEffect(() => {
        const handleResize = (): void => {
          setWindowSize({
            width: window.innerWidth,
          });
        };
        
        window.addEventListener('resize', handleResize);
        
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
      }, []); 
    
      return windowSize;
    };