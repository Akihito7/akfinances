import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Resume } from "../pages/Resume";

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home></Home>}
            />
            <Route
                path="/register"
                element={<Register></Register>}
            />

            <Route
                path="/resume"
                element={<Resume></Resume>}
            />

        </Routes>
    )
}