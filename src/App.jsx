import './App.css'

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <h1>🤖 AI Agent Research Group</h1>
                <p>Welcome to Our Research Portal</p>
            </header>

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
                        <div className="feature-card">
                            <h3>🧠 Multi-Agent Systems</h3>
                            <p>Exploring collaboration between AI agents</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎯 Decision Making</h3>
                            <p>Advanced algorithms for intelligent decisions</p>
                        </div>
                        <div className="feature-card">
                            <h3>🔬 Applied Research</h3>
                            <p>Real-world applications and solutions</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2025 AI Agent Research Group | CUHK</p>
            </footer>
        </div>
    )
}

export default App