import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {  
  return (
    <div className="social-container">
        <h3>Compartilhe</h3>

        <a href="https://www.youtube.com/"
            className="whatsapp social">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.facebook.com/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  )
}

export default SocialFollow;
