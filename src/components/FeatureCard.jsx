import { motion } from 'framer-motion'
import './FeatureCard.css'

function FeatureCard({ icon, title, description, index = 0 }) {
    return (
        <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1  // 每个卡片延迟0.1秒
            }}
            whileHover={{
                y: -10,
                transition: { duration: 0.2 }
            }}
        >
            <h3>{icon} {title}</h3>
            <p>{description}</p>
        </motion.div>
    )
}

export default FeatureCard