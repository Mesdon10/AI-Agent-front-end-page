import '../styles/Page.css'

function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>About Us</h1>
                <p>Learn more about our research group and mission</p>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Our Mission</h2>
                    <p>
                        The AI Agent Research Group at CUHK is committed to pushing
                        the boundaries of artificial intelligence through innovative
                        research in autonomous agents, multi-agent systems, and
                        intelligent decision-making.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Research Focus</h2>
                    <div className="focus-grid">
                        <div className="focus-item">
                            <h3>🎯 Autonomous Agents</h3>
                            <p>Developing intelligent agents that can operate independently in complex environments.</p>
                        </div>
                        <div className="focus-item">
                            <h3>🤝 Collaboration</h3>
                            <p>Understanding how multiple AI agents can work together effectively.</p>
                        </div>
                        <div className="focus-item">
                            <h3>💡 Innovation</h3>
                            <p>Creating novel approaches to solve real-world challenges.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2>Our Values</h2>
                    <ul className="values-list">
                        <li>🔬 <strong>Scientific Rigor</strong> - Commitment to high-quality research</li>
                        <li>🌟 <strong>Innovation</strong> - Pushing boundaries of what's possible</li>
                        <li>🤲 <strong>Collaboration</strong> - Working together to achieve more</li>
                        <li>🌍 <strong>Impact</strong> - Creating solutions that matter</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default About