import { motion } from 'framer-motion'
import './Loading.css'

function Loading() {
    return (
        <div className="loading-container">
            <motion.div
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                🤖
            </motion.div>
            <p>Loading...</p>
        </div>
    )
}

export default Loading