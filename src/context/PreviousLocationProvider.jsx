import { createContext, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PreviousLocationContext = createContext(null);

export const PreviousLocationProvider = ({ children }) => {
    const location = useLocation();
    const previousLocationRef = useRef(null);

    useEffect(() => {
        previousLocationRef.current = location;
    }, [location]);

    return (
        <PreviousLocationContext.Provider value={previousLocationRef.current}>
            {children}
        </PreviousLocationContext.Provider>
    );
};

export const usePreviousLocation = () => useContext(PreviousLocationContext);
