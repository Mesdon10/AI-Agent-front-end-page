import '../styles/Page.css'

function Team() {
    const teamMembers = [
        {
            id: 1,
            name: "Dr. [Your Professor's Name]",
            role: "Principal Investigator",
            emoji: "👨‍🏫"
        },
        {
            id: 2,
            name: "Research Team Member",
            role: "PhD Candidate",
            emoji: "👨‍🔬"
        },
        {
            id: 3,
            name: "Your Name",
            role: "MSc Student",
            emoji: "👨‍💻"
        },
        // 添加新成员，只需复制粘贴并修改内容
        {
            id: 4,
            name: "Another Member",
            role: "Research Assistant",
            emoji: "👩‍🔬"
        },
        {
            id: 5,
            name: "New Member",
            role: "Visiting Scholar",
            emoji: "👨‍🎓"
        }
    ]

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Our Team</h1>
                <p>Meet the researchers driving innovation</p>
            </div>

            <div className="page-content">
                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="team-avatar">{member.emoji}</div>
                            <h3>{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="join-section">
                    <h2>Join Our Team</h2>
                    <p>
                        We are always looking for passionate researchers to join our group.
                        If you're interested in AI agents and intelligent systems, get in touch!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team