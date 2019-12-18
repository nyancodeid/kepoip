import Router from 'preact-router'
import { h, render } from 'preact'

// Components
import Lookup from './components/Lookup/Input'
import Result from './components/Result/Result'

import './bootstrap.min.css'
import './style.scss'

const App = () => (
	<Router>
    <Lookup path="/" />
    <Result path="/lookup/:ip" />
  </Router>
);

render(<App />, document.getElementById('root'))