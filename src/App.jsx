import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/common/homepage/HomePage";
import { LoginPage } from "./views/common/auth/LoginPage";
import { PasswordRecovery } from "./views/common/auth/PasswordRecovery";
import { SignupPage } from "./views/common/auth/SignupPage";
import { OrganizationSignupPage } from "./views/organization/OrganizationSignupPage";
import { InstructorSignupPage } from "./views/instructor/InstructorSignupPage";
import { Message } from "./components/common/Message";
import { Terms } from "./views/common/auth/Terms";
import { Identification } from "./views/common/auth/Identification";
import { AuthCred } from "./views/common/auth/AuthCred";
import { BasicUserInfo } from "./views/common/auth/BasicUserInfo";
import { AdditionalInfo } from './views/common/auth/AdditionalInfo';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />}>
                <Route index element={<AuthCred />} />
            </Route>

            <Route path="/signup" element={<SignupPage />}>
                <Route index element={<AuthCred />} />
                <Route path="identification" element={<Identification />} />
                <Route path="organization" element={<OrganizationSignupPage />}>
                    <Route index element={<AdditionalInfo />} />
                    <Route path="user-info" element={<BasicUserInfo />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="success" element={<Message />} />
                </Route>
                <Route path="instructor" element={<InstructorSignupPage />}>
                    <Route index element={<BasicUserInfo />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="success" element={<Message />} />
                </Route>
            </Route>

            <Route path="/password-recovery" element={<PasswordRecovery />} />
        </Routes>
    );
};