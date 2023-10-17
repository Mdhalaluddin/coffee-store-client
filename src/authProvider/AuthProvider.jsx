import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Components/firebase/firebaseConfig";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] =useState()

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        user,
        loading,
        createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;