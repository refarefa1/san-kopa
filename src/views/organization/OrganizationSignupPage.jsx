import { Fragment } from "react";
import { Outlet, useOutletContext } from "react-router-dom"
import { ProgressBar } from '../../components/common/ProgressBar';

export const OrganizationSignupPage = () => {

    const context = useOutletContext();
    const { progress } = context

    return (
        <Fragment>
            <ProgressBar progress={progress} />
            <Outlet context={context} />
        </Fragment>
    )
}