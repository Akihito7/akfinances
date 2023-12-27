import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../axios";


const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
    children: ReactNode;
}

type AuthContextProps = {
    signln: (credetials: SignlnProps) => void;
    signup: (UserInfo: SignupProps) => void;
}

type SignlnProps = {
    email: string;
    password: string
}

type SignupProps = {
    email: string;
    name: string;
    password: string;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    async function signln(credentials: SignlnProps) {

        try {
            const response = await api.post("/auth/siglnl", {
                email: credentials.email,
                password: credentials.password
            });

            console.log(user, token)

            setUser(response.data.user);
            setToken(response.data.token);


        } catch (error) {
            console.log(error)
        }

    }

    async function signup(userInfo: SignupProps) {
        try {
            await api.post("/auth/signup", {
                email: userInfo.email,
                name: userInfo.name,
                password: userInfo.password
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signup, signln }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const response = useContext(AuthContext);
    return response;
}

export { AuthContextProvider, useAuth };
