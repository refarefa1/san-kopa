import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <section className="home-page-container">
            <h1>Home page</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </section>
    )
}