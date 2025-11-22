import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import './Navbar.css'

function Navbar() {
    const location = useLocation()
    const { t } = useTranslation()

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
                            {t('nav.home')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={isActive('/about') ? 'nav-link active' : 'nav-link'}
                        >
                            {t('nav.about')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
                        >
                            {t('nav.projects')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/team"
                            className={isActive('/team') ? 'nav-link active' : 'nav-link'}
                        >
                            {t('nav.team')}
                        </Link>
                    </li>
                </ul>

                <div className="navbar-actions">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar