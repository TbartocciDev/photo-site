import "./NavigationBar.css"
import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <main className="NavigationBar">
            {/* <Link to='/' id="nav-page-link">Home</Link> */}
            <Link to='/about' id="nav-page-link">About</Link>
            <Link to='/photos' id="nav-page-link">Photos</Link>
            <Link to='/map' id="nav-page-link">Map</Link>
            <Link to='/blog' id="nav-page-link">Blog</Link>
            <Link to='/gear' id="nav-page-link">Gear</Link>
            <Link to='/contact' id="nav-page-link">Contact</Link>
        </main>
    )
}