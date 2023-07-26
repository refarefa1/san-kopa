import { Fragment } from "react";
import { Outlet, useOutletContext } from "react-router-dom"

export const OrganizationSignupPage = () => {

    const context = useOutletContext();

    return (
        <Fragment>
            <ProgressBar progress={progress} />
            <Outlet context={context} />
        </Fragment>
    )
}