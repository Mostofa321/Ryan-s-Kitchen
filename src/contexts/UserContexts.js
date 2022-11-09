import { createContext } from 'react';
export const AuthContext = createContext('');




const UserContexts = ({children}) => {



    const contextValue = {}
    return (
        <AuthContext.Provider value={contextValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContexts;