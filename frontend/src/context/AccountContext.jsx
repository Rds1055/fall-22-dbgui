import { useState, useEffect, createContext, useMemo } from "react";

export const AccountContext = createContext(undefined);

export const AccountProvider = ({ children }) => {

    const [ username, setUsername ] = useState(sessionStorage.userName);

    const context = useMemo(() => ({ username, setUsername }), [ username ]);

    useEffect(() => {
        if (username) {
            sessionStorage.userName = username;
        }
    }, [ username ]);

    return <AccountContext.Provider value = { context }>
        { children }
    </AccountContext.Provider>
}