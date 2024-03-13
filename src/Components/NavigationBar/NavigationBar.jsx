import "./NavigationBar.css"
import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <main className="NavigationBar">
            <Link to='/' id="nav-page-link">Home</Link>
            <Link to='/gear' id="nav-page-link">Gear</Link>
            <Link to='/photos' id="nav-page-link">Photos</Link>
            <Link to='/blog' id="nav-page-link">Blog</Link>
        </main>
    )
}