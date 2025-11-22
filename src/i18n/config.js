import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'

// 初始化 i18next
i18n
    .use(initReactI18next) // 连接到 React
    .init({
        resources: {
            en: { translation: translations.en },
            zh: { translation: translations.zh }
        },
        lng: localStorage.getItem('language') || 'en', // 默认语言
        fallbackLng: 'en', // 回退语言
        interpolation: {
            escapeValue: false // React已经处理了XSS
        }
    })

export default i18n