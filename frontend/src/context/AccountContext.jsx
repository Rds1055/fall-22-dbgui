import { useState, useEffect, createContext, useMemo } from "react";

export const AccountContext = createContext(undefined);

export const AccountProvider = ({ children }) => {
    const [ username, setUsername ] = useState(sessionStorage.username);

    const context = useMemo(() => ({ username, setUsername }), [ username ]);

    useEffect(() => {
        if (username) {
            sessionStorage.username = username;
        }
    }, [ username ]);

    return <AccountContext.Provider value = {{ context }}>
        { children }
    </AccountContext.Provider>
}