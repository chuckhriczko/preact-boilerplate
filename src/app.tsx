//Framework
import React from 'preact/compat';

//Router
import AppRoutes from './lib/router';

//Global Assets
import './assets/css/app.css';

const App = () => (
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  )
export default App;