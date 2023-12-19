import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";
import { AuthRoutes } from "./Auth.routes";

import { useAuth } from "../Contexts/AuthContext";


export function Routes() {
    const user = useAuth()

    return (
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}