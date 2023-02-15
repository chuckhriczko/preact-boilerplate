//Framework
import React from 'preact/compat';

//Router
import AppRoutes from './lib/router';

//Theme Provider
import ThemeProvider from './lib/contexts/ThemeContext/themeProvider';

//Global Assets
import './assets/css/app.css';

const App = () => (
    <React.StrictMode>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </React.StrictMode>
  )
export default App;