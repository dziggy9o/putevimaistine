import React, {Component} from 'react';
import Vesti from './sadrzaj/vesti';
import PlaniraneTure from './sadrzaj/planiraneture';
import Prijatelji from './sadrzaj/prijatelji';
import {Link} from 'react-router-dom';


class Sadrzaj extends Component {
    render(){
        return (
            <div id="main" className={`${this.props.blurklasa}`}>
				<section id="one" className="tiles">
								<article>
                                    <PlaniraneTure />
								</article>
								<article>
                                    <Vesti />
								</article>
								<article>
									
									<header className="major">
										<h3><Link to='/inicijativa' className="link">Inicijativa</Link></h3>
									</header>
								</article>
								<article>
									<header>
										<Link to='/galerija'>
										<div className="sadrzaj-galerija">
										<img src="./slike/galerija.png" alt="Galerija slika" />
										<h4>Galerija slika</h4>
										</div>
										</Link>
									</header>
								</article>
								<article>
									<header>
										<Link to='/video'>
										<div className="sadrzaj-galerija">
										<img src="./slike/video.png" alt="Video galerija" />
										<h4>Video galerija</h4>
										</div>
										</Link>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<header className="major">
										<h3 className="psNaslov">Prijatelji sajta</h3>
										<Prijatelji />
										
									</header>
								</article>
							</section>

							
					</div>
        )
    }
}
export default Sadrzaj;