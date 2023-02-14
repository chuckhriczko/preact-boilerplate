//Framework
import { render } from 'preact'
import App from './app';

//Assets
import './assets/css/app.css';

render(<App />, document.getElementById('app') as HTMLElement)