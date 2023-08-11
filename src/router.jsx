import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./views/common/homepage/HomePage";
import { LoginPage } from "./views/common/auth/LoginPage";
import { PasswordRecovery } from "./views/common/auth/PasswordRecovery";
import { SignupPage } from "./views/common/auth/SignupPage";
import { OrganizationSignupPage } from "./views/organization/OrganizationSignupPage";
import { InstructorSignupPage } from "./views/instructor/InstructorEditPage";
import { Message } from "./components/common/Message";
import { Terms } from "./views/common/auth/Terms";
import { Identification } from "./views/common/auth/Identification";
import { AuthCred } from "./views/common/auth/AuthCred";
import { BasicUserInfo } from "./views/common/auth/BasicUserInfo";
import { AdditionalInfo } from './views/common/auth/AdditionalInfo';

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
        element: <SignupPage />,
        children: [
            {
                path: '',
                element: <AuthCred />
            },
            {
                path: 'identification',
                element: <Identification />
            },
            {
                path: 'organization',
                element: <OrganizationSignupPage />,
                children: [
                    {
                        path: '',
                        element: <AdditionalInfo />
                    },
                    {
                        path: 'user-info',
                        element: <BasicUserInfo />
                    },
                    {
                        path: 'terms',
                        element: <Terms />
                    },
                    {
                        path: 'success',
                        element: <Message />
                    },
                ]
            },
            {
                path: 'instructor',
                element: <InstructorSignupPage />,
                children: [
                    {
                        path: '',
                        element: <BasicUserInfo />
                    },
                    {
                        path: 'terms',
                        element: <Terms />
                    },
                    {
                        path: 'success',
                        element: <Message />
                    },

                ]
            },
        ]
    },
    {
        path: "/password-recovery",
        element: <PasswordRecovery />
    },
]);