import "./NavigationBar.css"
import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <main className="NavigationBar">
            <div className="nav-container">
                <Link to='/' id="home-page-link">Brand Name</Link>
                <div className="nav-links-div">
                    <Link to='/blog' id="nav-page-link">Posts</Link>
                    <Link to='/map' id="nav-page-link">Map</Link>
                    <Link to='/gear' id="nav-page-link">Gear</Link>
                    <Link to='/photos' id="nav-page-link">Photos</Link>
                    <div className="mobile-nav">
                        <img src={process.env.PUBLIC_URL+"/mobile-nav.png"} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}