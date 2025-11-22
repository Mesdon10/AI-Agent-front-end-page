import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, User } from 'lucide-react'
import '../styles/Chat.css'

function Chat() {
    const { t } = useTranslation()
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: t('chat.welcomeMessage'),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    // 自动滚动到底部
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    // 模拟AI回复的数据库
    const getAIResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase()

        // 中文关键词匹配
        if (lowerMessage.includes('研究') || lowerMessage.includes('focus') || lowerMessage.includes('重点')) {
            return t('chat.questions.q1') === userMessage
                ? 'Our research focuses on multi-agent systems, intelligent decision-making, and autonomous agents. We explore how AI agents can collaborate and make intelligent decisions in complex environments.'
                : '我们的研究重点包括多智能体系统、智能决策和自主智能体。我们探索AI智能体如何在复杂环境中协作并做出智能决策。'
        }

        if (lowerMessage.includes('多智能体') || lowerMessage.includes('multi-agent')) {
            return t('chat.questions.q2') === userMessage
                ? 'Multi-agent systems involve multiple AI agents working together to solve complex problems. Our research explores coordination, communication, and collaborative decision-making among agents.'
                : '多智能体系统涉及多个AI智能体共同协作解决复杂问题。我们的研究探索智能体之间的协调、通信和协作决策。'
        }

        if (lowerMessage.includes('项目') || lowerMessage.includes('project')) {
            return t('chat.questions.q3') === userMessage
                ? 'We are currently working on three major projects: Multi-Agent Coordination Platform, Intelligent Decision Support System, and Adaptive Learning Agents. You can find more details on our Projects page!'
                : '我们目前正在进行三个主要项目：多智能体协调平台、智能决策支持系统和自适应学习智能体。您可以在项目页面找到更多详情！'
        }

        if (lowerMessage.includes('加入') || lowerMessage.includes('join') || lowerMessage.includes('team')) {
            return t('chat.questions.q4') === userMessage
                ? 'We welcome passionate researchers! Please check our Team page for current openings, or contact our Principal Investigator directly. We look for candidates with strong backgrounds in AI, machine learning, or related fields.'
                : '我们欢迎充满热情的研究人员！请查看我们的团队页面了解当前的职位空缺，或直接联系我们的首席研究员。我们寻找在AI、机器学习或相关领域有扎实背景的候选人。'
        }

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('你好')) {
            return lowerMessage.includes('你好')
                ? '你好！很高兴与您交流。我能为您介绍我们的研究工作，或者回答关于我们团队的问题。'
                : 'Hello! Nice to meet you. I can tell you about our research work or answer questions about our team.'
        }

        // 默认回复
        return lowerMessage.includes('你') || lowerMessage.includes('您')
            ? '这是一个很好的问题！目前这是一个演示版本，实际的AI对话功能将在连接后端API后启用。您可以尝试点击上方的快捷问题来体验预设的回答。'
            : 'That\'s an interesting question! This is currently a demo version. The actual AI chat functionality will be enabled once connected to the backend API. You can try clicking the quick questions above to see preset responses.'
    }

    // 处理发送消息
    const handleSend = async () => {
        if (!inputValue.trim()) return

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // 模拟AI思考时间
        setTimeout(() => {
            const aiMessage = {
                id: Date.now() + 1,
                type: 'ai',
                content: getAIResponse(inputValue),
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            setMessages(prev => [...prev, aiMessage])
            setIsTyping(false)
        }, 1500 + Math.random() * 1000) // 1.5-2.5秒随机延迟
    }

    // 处理快捷问题点击
    const handleQuickQuestion = (question) => {
        setInputValue(question)
        inputRef.current?.focus()
    }

    // 处理Enter键发送
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="chat-page"
        >
            <div className="chat-container">
                {/* 头部 */}
                <div className="chat-header">
                    <div className="chat-header-content">
                        <Bot size={32} />
                        <div>
                            <h1>{t('chat.title')}</h1>
                            <p>{t('chat.subtitle')}</p>
                        </div>
                    </div>
                </div>

                {/* 快捷问题 */}
                <div className="quick-questions">
                    <p className="quick-questions-title">{t('chat.quickQuestions')}:</p>
                    <div className="quick-questions-grid">
                        <button onClick={() => handleQuickQuestion(t('chat.questions.q1'))}>
                            {t('chat.questions.q1')}
                        </button>
                        <button onClick={() => handleQuickQuestion(t('chat.questions.q2'))}>
                            {t('chat.questions.q2')}
                        </button>
                        <button onClick={() => handleQuickQuestion(t('chat.questions.q3'))}>
                            {t('chat.questions.q3')}
                        </button>
                        <button onClick={() => handleQuickQuestion(t('chat.questions.q4'))}>
                            {t('chat.questions.q4')}
                        </button>
                    </div>
                </div>

                {/* 消息列表 */}
                <div className="messages-container">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`message ${message.type}`}
                            >
                                <div className="message-avatar">
                                    {message.type === 'ai' ? <Bot size={20} /> : <User size={20} />}
                                </div>
                                <div className="message-content">
                                    <p>{message.content}</p>
                                    <span className="message-time">{message.timestamp}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* 打字指示器 */}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="message ai typing-indicator"
                        >
                            <div className="message-avatar">
                                <Bot size={20} />
                            </div>
                            <div className="message-content">
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="typing-text">{t('chat.thinking')}</span>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* 输入区域 */}
                <div className="chat-input-container">
                    <div className="chat-input-wrapper">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={t('chat.placeholder')}
                            className="chat-input"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                            className="send-button"
                        >
                            <Send size={20} />
                            <span>{t('chat.send')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Chat