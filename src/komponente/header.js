import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logob from '../slike/logob.svg'

class Header extends Component {

    render() {
        const linkovi = [
            {naziv: 'Početna', lokacija: '/'},
            {naziv: 'O nama', lokacija: '/o-nama'},
            {naziv: 'Ciljevi', lokacija: '/ciljevi'},
            {naziv: 'Inicijative udruženja', lokacija: '/inicijativa'},
            {naziv: 'Putovanja za članove', lokacija: '/putovanja'},
            {naziv: 'Zahvalnice', lokacija: '/zahvalnice'},
            {naziv: 'Galerija', lokacija: '/galerija'},
            {naziv: 'Video', lokacija: '/video'}

        ]
        
        return (
            <div>
            <header id="header" className={`${this.props.blurklasa} hshadow alt`}>
						<Link to='/' className="logo"><img src={logob} alt="logo"/>   <span>Udruženje građana "Putevima istine"</span></Link>
						<nav>
							<a href='#0' onClick={this.props.klik} className="meni">Meni</a>
						</nav>
			</header>
            
            <nav id="menu" className={this.props.klasa}>
                <div className="inner">
                <ul className="links">
                    {linkovi.map((link, i) => {
                        return (
                            <li key={i}>
                                <Link onClick={this.props.klik} to={link.lokacija}>{link.naziv}</Link>
                            </li>
                        )
                    })}
                </ul>
                </div>
                <a href='#0' onClick={this.props.klik} className="close">Close</a>
            </nav>
            </div>
        )

    }
}

export default Header;