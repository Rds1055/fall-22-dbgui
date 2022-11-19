import { useState, useEffect, createContext } from "react";

export const AccountContext = createContext(undefined);

export const AccountProvider = ({ children }) => {
    const [ username, setUsername ] = useState(sessionStorage.username);

    useEffect(() => {
        if (username) {
            sessionStorage.username = username;
        }
    }, [ username ]);

    return <AccountContext.Provider value = {{ username, setUsername }}>
        { children }
    </AccountContext.Provider>
}