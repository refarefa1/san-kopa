import { useMemo } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom"
import { ProgressBar } from "../../components/common/ProgressBar";

const SIGNUP_SECTIONS_PERCENTAGE = 33.33

export const InstructorSignupPage = () => {
    const context = useOutletContext();
    const location = useLocation()

    const progress = useMemo(() => {
        switch (location.pathname) {
            case '/signup/instructor': return SIGNUP_SECTIONS_PERCENTAGE * 1
            case '/signup/instructor/terms': return SIGNUP_SECTIONS_PERCENTAGE * 2
            case '/signup/instructor/success': return SIGNUP_SECTIONS_PERCENTAGE * 3
        }
    }, [location.pathname])

    return (
        <>
            <ProgressBar progress={progress} />
            <Outlet context={context} />
        </>
    )
}