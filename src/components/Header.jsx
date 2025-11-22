import { useTranslation } from 'react-i18next'
import './Header.css'

function Header() {
    const { t } = useTranslation()

    return (
        <header className="header">
            <h1>🤖 {t('home.title')}</h1>
            <p>{t('home.subtitle')}</p>
        </header>
    )
}

export default Header