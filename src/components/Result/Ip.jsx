import { h } from 'preact'

const Ip = ({ ip, isp }) => {
  return <div className="ip-address-wrapper">
    <h1>{ip}</h1>
    <span>{isp}</span>
  </div>
}

export default Ip