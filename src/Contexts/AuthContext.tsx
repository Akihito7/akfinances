import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { api } from "../axios";

const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
    children: ReactNode;
}

type AuthContextProps = {
    signln: (credetials: SignlnProps) => void;
    signup: (UserInfo: SignupProps) => void;
    logout(): void;
    user: UserProps;
}

type UserProps = {
    id: string,
    email: string;
    name: string;
    imagem:string;
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

    const [user, setUser] = useState({} as UserProps);
    const [token, setToken] = useState(null);
    

    const nameAsyncStorage = "@akfinances/user"

    async function signln(credentials: SignlnProps) {

        try {
            const response = await api.post("/auth/signln", {
                email: credentials.email,
                password: credentials.password
            });

            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            setUser(response.data.user);
            setToken(response.data.token);
            saveCredentialsAsyncStorage(credentials.email, credentials.password);


        } catch (error) {
            console.log(error)
        }

    };

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
    };

    function logout() {
        setUser({} as UserProps);
        setToken(null);
        localStorage.removeItem(nameAsyncStorage);
        
    };

    async function tryLoginWithAsyncStorage() {
        try {

            const credentials = getCredentialsAsyncStorage();
            if (!credentials) return;

            const response = await api.post("/auth/signln", {
                email: credentials.email,
                password: credentials.password
            });

            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            setUser(response.data.user);
            setToken(response.data.token);
            saveCredentialsAsyncStorage(credentials.email, credentials.password);

        } catch (error) {
            console.log(error);
        }
    }

    function saveCredentialsAsyncStorage(email: string, password: string) {
        localStorage.setItem(nameAsyncStorage, JSON.stringify({ email, password }));
    }

    function getCredentialsAsyncStorage() {
        const credentials = localStorage.getItem(nameAsyncStorage);
        const credentialsJsonParse = credentials ? JSON.parse(credentials) : null;
        return credentialsJsonParse;
    }


    useEffect(() => {
        tryLoginWithAsyncStorage()
    }, [])

    return (
        <AuthContext.Provider value={{ signup, signln, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const response = useContext(AuthContext);
    return response;
}

export { AuthContextProvider, useAuth };
