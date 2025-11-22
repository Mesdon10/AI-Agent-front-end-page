import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'
import '../styles/Home.css'

function Home() {
    const { t } = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
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
                            index={0}
                        />
                        <FeatureCard
                            icon="🎯"
                            title={t('home.decisionMaking.title')}
                            description={t('home.decisionMaking.desc')}
                            index={1}
                        />
                        <FeatureCard
                            icon="🔬"
                            title={t('home.appliedResearch.title')}
                            description={t('home.appliedResearch.desc')}
                            index={2}
                        />
                        <FeatureCard
                            icon="🚀"
                            title={t('home.innovationLab.title')}
                            description={t('home.innovationLab.desc')}
                            index={3}
                        />
                    </div>
                </section>
            </main>
        </motion.div>
    )
}

export default Home