import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const location = useLocation()

    // 检查当前路径是否匹配
    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="logo-icon">🤖</span>
                    <span className="logo-text">AI Agent Lab</span>
                </div>

                <ul className="navbar-menu">
                    <li>
                        <Link
                            to="/"
                            className={isActive('/') ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={isActive('/about') ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/team"
                            className={isActive('/team') ? 'nav-link active' : 'nav-link'}
                        >
                            Team
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar