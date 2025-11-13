import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>© {currentYear} AI Agent Research Group | CUHK</p>
        </footer>
    )
}

export default Footer