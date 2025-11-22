import { useTranslation } from 'react-i18next'
import '../styles/Page.css'

function About() {
    const { t } = useTranslation()

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>{t('about.title')}</h1>
                <p>{t('about.subtitle')}</p>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>{t('about.missionTitle')}</h2>
                    <p>{t('about.missionDesc')}</p>
                </section>

                <section className="content-section">
                    <h2>{t('about.focusTitle')}</h2>
                    <div className="focus-grid">
                        <div className="focus-item">
                            <h3>🎯 {t('about.autonomousAgents.title')}</h3>
                            <p>{t('about.autonomousAgents.desc')}</p>
                        </div>
                        <div className="focus-item">
                            <h3>🤝 {t('about.collaboration.title')}</h3>
                            <p>{t('about.collaboration.desc')}</p>
                        </div>
                        <div className="focus-item">
                            <h3>💡 {t('about.innovation.title')}</h3>
                            <p>{t('about.innovation.desc')}</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>{t('about.valuesTitle')}</h2>
                    <ul className="values-list">
                        <li>🔬 <strong>{t('about.values.rigor')}</strong></li>
                        <li>🌟 <strong>{t('about.values.innovation')}</strong></li>
                        <li>🤲 <strong>{t('about.values.collaboration')}</strong></li>
                        <li>🌍 <strong>{t('about.values.impact')}</strong></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default About