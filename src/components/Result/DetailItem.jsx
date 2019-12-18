import { h } from 'preact'

const DetailItem = ({ name, value }) => {
  return <div className="detail-list-item">
    <span className="title">{name}</span>
    <span className="value">{value}</span>
  </div>
}

export default DetailItem