import React, { useContext, useEffect, useState } from "react";
import { HOCProps } from "../models/models";

interface IWindowDimensionsProps {
    windowWidth?: number;
    isFullScreen?: boolean;
    isMobileScreen?: boolean;
}

const windowDimensionsContext = React.createContext<IWindowDimensionsProps>({});

export const useWindowDimensions = () => {
    return useContext(windowDimensionsContext);
};

const WindowDimensionsProvider = ({ children }: HOCProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isFullScreen, setIsFullScreen] = useState(window.innerWidth > 1248);
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.addEventListener("resize", () =>{
                setWindowWidth(window.innerWidth)
                setIsFullScreen(window.innerWidth > 1248)
                setIsMobileScreen(window.innerWidth < 768)
            });
    }, []);

    return (
        <windowDimensionsContext.Provider value={{ windowWidth, isFullScreen, isMobileScreen }}>
            {children}
        </windowDimensionsContext.Provider>
    );
};

export default WindowDimensionsProvider;
