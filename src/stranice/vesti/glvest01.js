import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Glvest01 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - USPEŠNO ORGANIZOVANO HODOČASNIČKO PUTOVANJE</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - USPEŠNO ORGANIZOVANO HODOČASNIČKO PUTOVANJE' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/glvest01.png" alt="Inicijativa" />
                <h3 style={{backgroundColor: '#8B7565', padding: '3px'}} className="stranicanaslov">USPEŠNO ORGANIZOVANO HODOČASNIČKO PUTOVANJE</h3>
                <div className="stranicasdr">
                <p>
                "PUTEVIMA SVETOG SAVE U SVETU ZEMLJU IZRAEL I PALESTINU"
                <br/>
                od 24.-29.01.2020.g.
                <br/>
                <br/>
                PRIJAVITE SE ZA SLEDEĆE POKLONIČKO HODOČASNIČKO PUTOVANJE U SVETU ZEMLJU, IZRAEL I PALESTINU<br/> 12-17.05.2020.g.
                <br/>
                Info na tel/viber: <a href="tel:0643509434">+381 64 35 09 434</a>, Hadži Jovan Petrović, 
                <br/>
                email: <a href="mailto:kancelarija@putevimaistine.rs">kancelarija@putevimaistine.rs</a>
                <br/>
                </p>
                <h3>VESTI I SLIKE SA PUTOVANJA:</h3>
                <br/>
                <Link className="galerija" to='/vest01'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/2/cover.png' />
                                    <h5>MANASTIR SVETOG SAVE OSVEĆENOG</h5>
                 </Link>
                 <Link className="galerija" to='/vest02'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/3/cover.png' />
                                    <h5>MANASTIR SV.GRIGORIJA HOZEVITE</h5>
                 </Link>
                 <Link className="galerija" to='/vest03'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/4/cover.png' />
                                    <h5>SOBA TAJNE VEČERE</h5>
                 </Link>
                 <Link className="galerija" to='/vest04'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/5/cover.png' />
                                    <h5>REKA JORDAN</h5>
                 </Link>
                 <Link className="galerija" to='/vest05'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/6/cover.png' />
                                    <h5>MANASTIR ČASNOG KRSTA</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}