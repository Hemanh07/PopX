import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const route = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <WelcomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage />
                },
                {
                    path: '/signup',
                    element: <SignupPage />
                },
                {
                    path: "/home",
                    element: <HomePage />
                }
            ]
        }
    ]
)

export default route