import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Vest05 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - MANASTIR ČASNOG KRSTA</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - MANASTIR ČASNOG KRSTA' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/vesth.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">MANASTIR ČASNOG KRSTA</h3>
                <div className="stranicasdr">
                <p>
                Manastir  su počeli graditi car Kostantin i carica Jelena,zatim nastavio car Justinijan. Man.je za Srbe bitan jer je na svom praom putu Sv. Sava bogato ga darovo i smatra se drugim ktitorom. Manastir je još poznat kao Lotov jer je lot zasadio trojerodno drvo kipras,keder, bor od kog je napravljen krst za Gospoda
                <br/>

                <br/>
                </p>
                <Link className="galerija" to='/galerija6'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/6/cover.png' />
                                    <h5>Galerija slika</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}