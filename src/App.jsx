import './App.css'
import Header from './components/Header'
import FeatureCard from './components/FeatureCard'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Header />

            <main className="main-content">
                <section className="intro-section">
                    <h2>About Our Research</h2>
                    <p>
                        We are dedicated to advancing the field of AI agents through
                        innovative research and practical applications.
                    </p>
                </section>

                <section className="features-section">
                    <h2>Research Areas</h2>
                    <div className="feature-grid">
                        <FeatureCard
                            icon="🧠"
                            title="Multi-Agent Systems"
                            description="Exploring collaboration between AI agents"
                        />
                        <FeatureCard
                            icon="🎯"
                            title="Decision Making"
                            description="Advanced algorithms for intelligent decisions"
                        />
                        <FeatureCard
                            icon="🔬"
                            title="Applied Research"
                            description="Real-world applications and solutions"
                        />
                        <FeatureCard
                            icon="🚀"
                            title="Innovation Lab"
                            description="Pushing the boundaries of AI technology"
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default App