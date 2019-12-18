import Router from 'preact-router'
import { h, render } from 'preact'

// Components
import Lookup from './components/Lookup/Input'
import Result from './components/Result/Result'

import './bootstrap.min.css'
import './style.scss'

const isProd = (process.env.NODE_ENV === 'production')
const baseName = process.env.BASENAME

const App = () => (
	<Router>
    <Lookup path={`/${isProd ? baseName : '/' }`} />
    <Result path={`/${isProd ? baseName : '/' }/lookup/:ip`} />
  </Router>
);

render(<App />, document.getElementById('root'))