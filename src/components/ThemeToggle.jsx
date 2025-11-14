import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import './ThemeToggle.css'

function ThemeToggle() {
    // State: 存储当前主题（'light' 或 'dark'）
    const [theme, setTheme] = useState(() => {
        // 从 localStorage 读取用户之前的选择，默认是 'light'
        return localStorage.getItem('theme') || 'light'
    })

    // Effect: 当 theme 变化时，更新 HTML 的 class 和 localStorage
    useEffect(() => {
        // 给 <html> 元素添加或移除 'dark-mode' class
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode')
        } else {
            document.documentElement.classList.remove('dark-mode')
        }

        // 保存到 localStorage，下次访问时记住用户的选择
        localStorage.setItem('theme', theme)
    }, [theme]) // [theme] 表示：只在 theme 变化时执行

    // 切换主题的函数
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    )
}

export default ThemeToggle