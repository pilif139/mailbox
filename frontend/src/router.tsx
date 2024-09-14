import {
    createBrowserRouter,
} from "react-router-dom"
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";

export const routes = [
    {path: "/", element: <App/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/register", element: <RegisterPage/>},
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <RegisterPage/>,
    }
])

export default router