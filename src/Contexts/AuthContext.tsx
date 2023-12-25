import { createContext, useContext, ReactNode } from "react";
import { api } from "../axios";


const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
    children: ReactNode;
}

type AuthContextProps = {
    signup : (UserInfo : SignupProps) => void;
}

type SignupProps = {
    email : string;
    name : string;
    password : string;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {

    async function signup(userInfo : SignupProps){
        try {
            await api.post("/auth/signup", {
                email : userInfo.email,
                name : userInfo.name,
                password : userInfo.password
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{signup}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const response = useContext(AuthContext);
    return response;
}

export { AuthContextProvider, useAuth };
