import { Link } from "react-router-dom"

const LecturePage = () => {
    return (
        <section className="lecture-page-container">
            <h1>Lecture page</h1>
        </section>
    )
}

const InstructorPage = () => {
    return (
        <section className="instructor-page-container">
            <h1>Instructor page</h1>
        </section>
    )
}

export const HomePage = () => {
    return (
        <section className="home-page-container">
            <h1>Home page</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <LecturePage />
            <InstructorPage />
        </section>
    )
}
