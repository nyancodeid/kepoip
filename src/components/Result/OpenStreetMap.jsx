import { h, Component } from 'preact'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class OpenSteetMap extends Component {
  constructor () {
    super()
  }

  render() {
    const position = [this.props.lat, this.props.lng]

    return (
      <Map center={position} zoom="10">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}