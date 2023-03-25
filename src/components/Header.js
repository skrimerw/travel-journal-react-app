import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <header>
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",}} />
            <p className="site-header">my travel journal</p>
        </header>
    )
}