import { h } from 'preact'

const Header = () => {
  return (<div className="title">
    <h1>Kepo<span>IP</span></h1>
    <span className="sub-title">a boring App to find Location Detail of an IP address</span>
    <br/><br/>
    <a href="https://github.com/nyancodeid/kepoip">
      <img alt="Repository" src="https://img.shields.io/badge/github-kepoip-green?logo=github&amp;style=flat" 
      style="max-width:100%;" />
    </a>
  </div>)
}

export default Header