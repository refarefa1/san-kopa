import { createHashRouter } from "react-router-dom";
import { HomePage } from "./views/common/homepage/HomePage";
import { LoginPage } from "./views/common/auth/LoginPage";
import { SignupPage } from "./views/common/auth/SignupPage";
import { PasswordRecovery } from "./views/common/auth/PasswordRecovery";
import { SignupInfo } from "./views/common/auth/SignupInfo";

export const router = createHashRouter([
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
        path: "/signup-info",
        element: <SignupInfo />
    },
    {
        path: "/password-recovery",
        element: <PasswordRecovery />
    },
]);