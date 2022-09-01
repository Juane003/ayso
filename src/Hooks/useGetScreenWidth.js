import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const getScreenWidth = () => {
      setScreenWidth(screen.width);
    }
    getScreenWidth();
  }, [screen.width]);

  return screenWidth;
}

export default useScreenWidth;