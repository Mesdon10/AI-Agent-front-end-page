import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import './LanguageToggle.css'

function LanguageToggle() {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en'
        i18n.changeLanguage(newLang)
        localStorage.setItem('language', newLang)
    }

    return (
        <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            <Globe size={18} />
            <span className="language-text">
        {i18n.language === 'en' ? '中文' : 'EN'}
      </span>
        </button>
    )
}

export default LanguageToggle