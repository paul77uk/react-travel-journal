import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {

  return (
    <>
      <div className="card">
        <img src={props.imageUrl} alt="" className="card-img"/>
        <div className="text-container">

          <div className="country-container">
            <div className="location-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="country-title">{props.location}</div>
              <a href={props.googleMapsUrl} target='blank' className="map-link">View on Google Maps</a>
          </div>

          <div className="location-title">{props.title}</div>
          <div className="dates">{props.startDate} - {props.endDate}</div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </>
  )
}

export default Card
