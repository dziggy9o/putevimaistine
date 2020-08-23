import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Vest04 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - REKA JORDAN</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Inicijativa' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/vesth.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">REKA JORDAN</h3>
                <div className="stranicasdr">
                <p>
                Mesto pogruženja je mest na kom je Sveti Jovan Krstitelj, krstio Gospoda Isusa Hrista, a nalazi se preko puta grada Jerihona. Na tom mestu Isus Navin je uveo narod Božiji u obećanu zemlju.
                <br/>

                <br/>
                </p>
                <Link className="galerija" to='/galerija5'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/5/cover.png' />
                                    <h5>Galerija slika</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}