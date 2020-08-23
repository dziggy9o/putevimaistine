import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Vest03 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - SOBA TAJNE VEČERE</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Inicijativa' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/vesth.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">SOBA TAJNE VEČERE</h3>
                <div className="stranicasdr">
                <p>
                Drugačije Gornjica, je mesto poslednje Hristove večere ili Tajna Večera. U istoj sobi se posle Vaskrsenja javio apostolima i obećao Duha Svetog. Gornjica je je bila mesto gde je Majka Božija sa Sv. Jovanom Bogoslovom živela 17 godina, a na Sionu je isto usnula a to je ujedno i poslednje mesto odmora Sv. Arhiđakona Stifana. Sveti Sava Srpski je na svom prvom putivnjau odkupio od Saraćena i pod podločao zlatom zajedno sa kućom Sv. Jovana Bogoslov i poklonio kao metoh mastiru Sv. Save Osvećenog. U krstaškim ratovima je porušena od strane templara, a obnovili su je Franjevci u 14 veku 1524 postaje džamija sve do 1917 g.
                <br/>

                <br/>
                </p>
                <Link className="galerija" to='/galerija4'>
                                    <img alt='SOBA TAJNE VEČERE' src='/slike/album/4/cover.png' />
                                    <h5>Galerija slika</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}