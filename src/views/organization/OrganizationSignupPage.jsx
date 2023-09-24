import { useMemo } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom"
import { ProgressBar } from '../../components/common/ProgressBar';

const SIGNUP_SECTIONS_PERCENTAGE = 25

export const OrganizationSignupPage = () => {
    const context = useOutletContext();
    const location = useLocation()

    const progress = useMemo(() => {
        switch (location.pathname) {
            case '/signup/organization': return SIGNUP_SECTIONS_PERCENTAGE * 1
            case '/signup/organization/user-info': return SIGNUP_SECTIONS_PERCENTAGE * 2
            case '/signup/organization/terms': return SIGNUP_SECTIONS_PERCENTAGE * 3
            case '/signup/organization/success': return SIGNUP_SECTIONS_PERCENTAGE * 4
        }
    }, [location.pathname])

    return (
        <>
            <ProgressBar progress={progress} />
            <Outlet context={context} />
        </>
    )
}