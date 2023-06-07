import { InstructorAdd } from '../../../components/instructor/InstructorAdd'
import { OrganizationAdd } from '../../../components/organization/OrganizationAdd'
import { Terms } from '../../../components/common/Terms'
import { Message } from '../../../components/common/Message'

const IdentificationPage = () => {
    return (
        <section className="identification-page-container">
            <h1>identification page</h1>
        </section>
    )
}

const InstructorSignup = () => {
    return (
        <section className="InstructorSignup-page-container">
            <h1>InstructorSignup page</h1>
            <InstructorAdd />
            <Terms />
            <Message />
        </section>
    )
}

const OrganizationSignup = () => {
    return (
        <section className="OrganizationSignup-page-container">
            <h1>OrganizationSignup page</h1>
            <OrganizationAdd />
            <Terms />
            <Message />
        </section>
    )
}

export const SignupPage = () => {
    return (
        <section className="signup-page-container">
            <h1>Signup page</h1>
            <IdentificationPage />
            <InstructorSignup />
            <OrganizationSignup />
        </section>
    )
}