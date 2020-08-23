import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const socialLinkovi = [
    {adresa: 'https://www.facebook.com/putevimasvetogsave/', naziv: 'Facebook', ikona: <FontAwesomeIcon icon={faFacebook} />},
    {adresa: 'https://www.instagram.com/putevimasvetogsave/', naziv: 'Instagram', ikona: <FontAwesomeIcon icon={faInstagram} />},
    {adresa: 'https://www.youtube.com/channel/UCs6Fvb57ylEHbqc3DLDxmGA', naziv: 'Youtube', ikona: <FontAwesomeIcon icon={faYoutube} />}
]

class Footer extends Component{
    render() {
        return (
            <footer id="footer" className={`${this.props.blurklasa}`}>
                
						<div className="inner">
							<ul className="icons">
                                {socialLinkovi.map((link, i) => {
                                    return (
                                        <li key={i}>
                                            <a target="_blank "href={link.adresa} className="icon brands alt">
                                                {link.ikona}
                                                <span className="label">{link.naziv}</span>
                                            </a>
                                        </li>
                                    )
                                })}
							</ul>
							<ul className="copyright">
								<li>&copy; Putevima istine</li><li>Dizajn: <a rel="noopener noreferrer" target="_blank" href="http://citymarketingservice.rs/">City Marketing Service</a></li>
							</ul>
						</div>
			</footer>
        )
    }
}

export default Footer;