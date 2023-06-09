import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./views/common/homepage/HomePage";
import { LoginPage } from "./views/common/auth/LoginPage";
import { PasswordRecovery } from "./views/common/auth/PasswordRecovery";
import { SignupPage } from "./views/common/auth/SignupPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/password-recovery",
        element: <PasswordRecovery />
    },
]);