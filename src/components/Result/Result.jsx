import { h, Component } from 'preact'
import { route } from 'preact-router'

import Ip from './Ip'
import Detail from './Detail'
import OpenStreetMap from './OpenStreetMap'
import Header from '../Header'

export default class Result extends Component {
  state = {
    ipAddress: '',
    isLoading: true,
    details: {
      ip: '-',
      type: '-',
      organize: '-',
      isp: '-',
      city: '-',
      country: '-',
      countryCode: '-',
      continent: '-',
      latitude: '-',
      longitude: '-'
    }
  }
  
  constructor () {
    super()
  }

  componentDidMount () {
    const ip = (this.props.ip === "me") ? "" : atob(this.props.ip) + '/'
    const uri = `https://ipapi.co/${ip}json/`

    fetch(uri, { 
      method: 'get'
    }).then(res => res.json()).then(response => {
      const details = {
        ip: response.ip || '-',
        isp: response.org || '-',
        currency: response.currency_name || '-',
        asn: response.asn || '-',
        city: response.city || '-',
        country: response.country_name || '-',
        countryCode: response.country_code_iso3 || '-',
        continent: response.continent_code || '-',
        latitude: response.latitude || '-',
        longitude: response.longitude || '-'
      }

      this.setState({
        ipAddress: details.ip,
        isLoading: false,
        details
      })
    })
  }

  render (_, { isLoading, ipAddress, details }) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <Header />
            {isLoading ? <h1 className="title">Loading IP</h1> : (
              <div>
                <Ip ip={ipAddress} isp={details.isp} />
                <Detail details={details} />
              </div>
            )}
          </div>
          <div className="col-md-6 col-12">
            {isLoading ? <h1 className="title">Loading Maps</h1> : <OpenStreetMap lat={details.latitude} lng={details.longitude} />}
          </div>
      </div>
    </div>
    )
  }
}