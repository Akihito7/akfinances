import { Routes, Route } from "react-router-dom"

import { Signup } from "../pages/Signup"
import { Signln } from "../pages/Signln"


export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Signln />} />
            <Route path="/register" element={<Signup />} />
        </Routes>
    )
}