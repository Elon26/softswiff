import React, { useContext, useState } from "react";
import { HOCProps } from "../models/models";

interface IClickCatcherContextProps {
    initSwitcher?: boolean;
    isClassInFocus?: boolean;
}

const ClickCatcherContext = React.createContext<IClickCatcherContextProps>({});

let classForCheck = '';
let classForOmit = '';

export const useClickCatcher = (classForCheckName: string, classForOmitName: string) => {
    classForCheck = classForCheckName;
    classForOmit = classForOmitName;
    return useContext(ClickCatcherContext);
};

const ClickCatcherProvider = ({ children }: HOCProps) => {
    const [initSwitcher, setInitSwitcher] = useState(false);
    const [isClassInFocus, setIsClassInFocus] = useState(false);

    const clickCatcher = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof Element && classForCheck && classForOmit) {
            setInitSwitcher(() => !initSwitcher)
                if (e.target.closest(classForCheck) || e.target.closest(classForOmit)) {
                    setIsClassInFocus(true);
                } else {
                    setIsClassInFocus(false);
                }
            
        }
    };

    return (
        <ClickCatcherContext.Provider
            value={{
                initSwitcher,
                isClassInFocus
            }}
        >
            <div className="clickCatcher" onClick={clickCatcher}>
                {children}
            </div>
        </ClickCatcherContext.Provider>
    );
};

export default ClickCatcherProvider;
