import { Outlet, useOutletContext } from "react-router-dom"

export const InstructorSignupPage = () =>{

  const context = useOutletContext();

    return (
        <Outlet context={context}/>
    )
}