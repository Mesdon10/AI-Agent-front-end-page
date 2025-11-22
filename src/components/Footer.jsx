import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>© {currentYear} {t('footer.copyright')}</p>
        </footer>
    )
}

export default Footer