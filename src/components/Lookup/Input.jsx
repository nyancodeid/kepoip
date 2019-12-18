import { h, Component } from 'preact'
import { route } from 'preact-router'
import linkState from 'linkstate'

import isIp from 'is-ip'
import Header from '../Header'


const isProd = (process.env.NODE_ENV === 'production')
const baseName = process.env.BASENAME

export default class Lookup extends Component {
  state = {
    ip: '',
    error: false
  }

  constructor () {
    super()
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (!isIp(this.state.ip)) {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
      route(`${isProd ? `${baseName}/` : ''}lookup/${btoa(this.state.ip)}`)
    }
  }

  onSubmitMe = () => {
    route(`${isProd ? `${baseName}/` : ''}lookup/me`)
  }

  render (_, { ip, error }) {
    return (
      <header className="container">
        <Header />
        <form className="ip-input" onSubmit={this.onSubmit}>
          <input type="text" className={error ? 'error' : ''} value={ip} onInput={linkState(this, 'ip')} placeholder="Write IP Address here.." />
          <div>
            <button type="submit" onClick={this.onSubmit}>Lookup</button>
            <button type="submit" onClick={this.onSubmitMe}>Find Me!</button>
          </div>
        </form>
      </header>
    )
  }
}