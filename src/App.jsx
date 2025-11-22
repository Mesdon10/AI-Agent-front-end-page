import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Chat from './pages/Chat'
import './App.css'

// 创建一个新组件来包装路由
function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <Router basename="/AI-Agent-front-end-page">
            <div className="app-container">
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </div>
        </Router>
    )
}

export default App