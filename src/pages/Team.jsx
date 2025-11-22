import { useTranslation } from 'react-i18next'
import '../styles/Page.css'

function Team() {
    const { t } = useTranslation()

    const teamMembers = [
        {
            id: 1,
            name: "Dr. [Your Professor's Name]",
            roleKey: 'team.roles.pi',
            emoji: "👨‍🏫"
        },
        {
            id: 2,
            name: "Research Team Member",
            roleKey: 'team.roles.phd',
            emoji: "👨‍🔬"
        },
        {
            id: 3,
            name: "Your Name",
            roleKey: 'team.roles.msc',
            emoji: "👨‍💻"
        },
        {
            id: 4,
            name: "Another Member",
            roleKey: 'team.roles.ra',
            emoji: "👩‍💻"
        }
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>{t('team.title')}</h1>
                <p>{t('team.subtitle')}</p>
            </div>

            <div className="page-content">
                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="team-avatar">{member.emoji}</div>
                            <h3>{member.name}</h3>
                            <p className="team-role">{t(member.roleKey)}</p>
                        </div>
                    ))}
                </div>

                <div className="join-section">
                    <h2>{t('team.joinTitle')}</h2>
                    <p>{t('team.joinDesc')}</p>
                </div>
            </div>
        </div>
    )
}

export default Team