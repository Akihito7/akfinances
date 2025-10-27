import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../axios";
import { signup } from "../api/signup";
import { signln } from "../api/signln";

export const NAME_ASYNC_STORAGE = "@akfinances/user";

const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProviderProps {
  children: ReactNode;
}

type AuthContextProps = {
  signln: (credetials: SignlnProps) => void;
  signup: (UserInfo: SignupProps) => void;
  logout(): void;
  user: UserProps;
};

type UserProps = {
  id: string;
  email: string;
  name: string;
  imagem: string;
};

export type SignlnProps = {
  email: string;
  password: string;
};

export type SignupProps = {
  email: string;
  name: string;
  password: string;
};

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserProps);

  async function handleSignln(credentials: SignlnProps) {
    const { email, password } = credentials;
    try {
      const data = await signln({ email, password });
      const user = data.user;
      const token = data.token;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      saveCredentialsAsyncStorage(email, password);
    } catch (error) {
      alert("Email ou senha inválidos");
    }
  }
  async function handleSignup({ email, name, password }: SignupProps) {
    try {
      await signup({ email, name, password });
      signln({ email, password });
    } catch (error: any) {
      alert(`ERRO AO CRIAR CONTA ${error?.message}`);
    }
  }

  function logout() {
    setUser({} as UserProps);
    localStorage.removeItem(NAME_ASYNC_STORAGE);
  }

  async function tryLoginWithAsyncStorage() {
    try {
      const credentials = getCredentialsAsyncStorage();
      if (!credentials) return;
      await signln(credentials);
    } catch (error) {
      console.log(error);
    }
  }

  function saveCredentialsAsyncStorage(email: string, password: string) {
    localStorage.setItem(
      NAME_ASYNC_STORAGE,
      JSON.stringify({ email, password })
    );
  }

  function getCredentialsAsyncStorage() {
    const credentials = localStorage.getItem(NAME_ASYNC_STORAGE);
    const credentialsJsonParse = credentials ? JSON.parse(credentials) : null;
    return credentialsJsonParse;
  }

  useEffect(() => {
    tryLoginWithAsyncStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup: handleSignup, signln: handleSignln, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const response = useContext(AuthContext);
  return response;
}

export { AuthContextProvider, useAuth };
