import { useState } from "react"
import ThemeContext from "./themeContext"

const ThemeProvider: React.FC = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	const toggleTheme = (): void => {
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider