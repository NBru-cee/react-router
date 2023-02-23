import { useState, useEffect } from "react";
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        heigth: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                heigth: window.innerHeight,
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
};

export default useWindowSize;
