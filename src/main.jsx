import { render } from 'preact'
import { registerSW } from 'virtual:pwa-register';
import './index.css'
import App from './App'

registerSW();
render(<App />, document.getElementById('app'))
