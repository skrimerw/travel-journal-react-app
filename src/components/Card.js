import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="coverImg" src={props.imageUrl} alt=""/>
            </div>
            <div className="information">
                <FontAwesomeIcon icon={faLocationDot} className="loc-dot"/> 
                <span className="location">{props.location}</span>
                <a href={props.yandexMapsUrl} className="map">View in Yandex Maps</a>
                <h1 className="title">{props.title}</h1>
                <div className="date">
                    <span className="arrival-date">{props.startDate} - </span>
                    <span className="leaving-date">{props.endDate}</span>
                </div>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}