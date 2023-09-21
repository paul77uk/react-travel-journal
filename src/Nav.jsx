import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Nav() {

  return (
    <>
      <div className="navbar">
        <div className="earth-icon"><FontAwesomeIcon icon={faEarthAmericas} /></div>
        <div className="nav-title">my travel journal.</div>
      </div>
    </>
  )
}

export default Nav
