import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'
import '../styles/Home.css'

function Home() {
    const { t } = useTranslation()

    return (
        <>
            <Header />

            <main className="main-content">
                <section className="intro-section">
                    <h2>{t('home.aboutTitle')}</h2>
                    <p>{t('home.aboutDesc')}</p>
                </section>

                <section className="features-section">
                    <h2>{t('home.researchAreasTitle')}</h2>
                    <div className="feature-grid">
                        <FeatureCard
                            icon="🧠"
                            title={t('home.multiAgent.title')}
                            description={t('home.multiAgent.desc')}
                        />
                        <FeatureCard
                            icon="🎯"
                            title={t('home.decisionMaking.title')}
                            description={t('home.decisionMaking.desc')}
                        />
                        <FeatureCard
                            icon="🔬"
                            title={t('home.appliedResearch.title')}
                            description={t('home.appliedResearch.desc')}
                        />
                        <FeatureCard
                            icon="🚀"
                            title={t('home.innovationLab.title')}
                            description={t('home.innovationLab.desc')}
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home