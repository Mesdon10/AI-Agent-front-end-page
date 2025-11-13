import '../styles/Page.css'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Multi-Agent Coordination Platform",
            description: "A framework for enabling seamless communication between multiple AI agents.",
            status: "Active",
            year: "2024-2025"
        },
        {
            id: 2,
            title: "Intelligent Decision Support System",
            description: "AI-powered system for complex decision-making in uncertain environments.",
            status: "Active",
            year: "2024"
        },
        {
            id: 3,
            title: "Adaptive Learning Agents",
            description: "Self-improving AI agents that learn from experience and adapt to new situations.",
            status: "Completed",
            year: "2023"
        }
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Our Projects</h1>
                <p>Explore our ongoing and completed research projects</p>
            </div>

            <div className="page-content">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-footer">
                                <span className="project-year">📅 {project.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects