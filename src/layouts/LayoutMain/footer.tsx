import { useContext } from "react";
import ThemeContext from "../../lib/contexts/ThemeContext/themeContext";

const Footer = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <footer>
      <button type='button' onClick={toggleTheme}>{`${isDarkTheme ? `Light` : `Dark`} Mode`}</button>
    </footer>
  );
}
export default Footer;