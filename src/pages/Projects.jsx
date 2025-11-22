import { useTranslation } from 'react-i18next'
import '../styles/Page.css'

function Projects() {
    const { t } = useTranslation()

    const projects = [
        {
            id: 1,
            titleKey: 'projects.project1.title',
            descKey: 'projects.project1.desc',
            statusKey: 'projects.project1.status',
            yearKey: 'projects.project1.year'
        },
        {
            id: 2,
            titleKey: 'projects.project2.title',
            descKey: 'projects.project2.desc',
            statusKey: 'projects.project2.status',
            yearKey: 'projects.project2.year'
        },
        {
            id: 3,
            titleKey: 'projects.project3.title',
            descKey: 'projects.project3.desc',
            statusKey: 'projects.project3.status',
            yearKey: 'projects.project3.year'
        }
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>{t('projects.title')}</h1>
                <p>{t('projects.subtitle')}</p>
            </div>

            <div className="page-content">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <h3>{t(project.titleKey)}</h3>
                                <span className={`status-badge ${t(project.statusKey).toLowerCase().includes('active') || t(project.statusKey).includes('进行') ? 'active' : 'completed'}`}>
                  {t(project.statusKey)}
                </span>
                            </div>
                            <p className="project-description">{t(project.descKey)}</p>
                            <div className="project-footer">
                                <span className="project-year">📅 {t(project.yearKey)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects