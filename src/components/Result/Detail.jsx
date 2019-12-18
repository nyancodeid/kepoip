import { h } from 'preact'
import DetailItem from './DetailItem'

const Detail = ({ details }) => {
  const detailComponents = [
    { name: 'ISP', value: details.isp },
    { name: 'Organization', value: details.isp },
    { name: 'ASN', value: details.asn },
    { name: 'City', value: details.city },
    { name: 'Country', value: `${details.country} (${details.countryCode})` },
    { name: 'Continent Code', value: details.continent },
    { name: 'Currency', value: details.currency },
    { name: 'Latitude', value: details.latitude },
    { name: 'Longitude', value: details.longitude },
  ]

  const buildDetailComponents = detailComponents.map(detail => {
    return <DetailItem name={detail.name} value={detail.value} />
  })

  return <div className="detail-wrapper">
    {buildDetailComponents}
  </div>
}

export default Detail