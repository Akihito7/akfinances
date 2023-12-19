import { createContext, useContext, ReactNode } from "react";

const USER = {
    name: "Guilherme Akihito",
    email: "akihitopro7@gmail.com",
};

const AuthContext = createContext(USER);

interface AuthContextProviderProps {
    children: ReactNode;
}

function AuthContextProvider({ children }: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={USER}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const response = useContext(AuthContext);
    return response;
}

export { AuthContextProvider, useAuth };
