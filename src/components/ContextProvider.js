import { useState, createContext } from "react";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', token: '' });

    const updateName = newName => setUser({ ...user, name: newName });
    const updateToken = newToken => setUser({ ...user, token: newToken });

    const passProps = { user, updateName, updateToken };

    return <UserContext.Provider value={passProps}>{children}</UserContext.Provider>;
};

export default ContextProvider;