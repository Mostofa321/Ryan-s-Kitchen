import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext('');



export const auth = getAuth(app);
const UserContexts = ({children}) => {
    
// sign up with email & password 
const signUp = (email, password) =>{
    
    return  createUserWithEmailAndPassword(auth, email, password)
};


    const contextValue = {signUp}
    return (
        <AuthContext.Provider value={contextValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContexts;