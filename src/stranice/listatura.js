import React, {Component} from 'react';
import PlaniraneTure from '../komponente/sadrzaj/planiraneture';
import MetaTags from 'react-meta-tags';


export default class TureLista extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - Putovanja za članove</title>
            <meta name="description"
                  content="Udruženje organizuje putovanja za svoje članove"
    />
             <meta property="og:title" content='"Putevima istine" - putovanja' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/onama.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">Putovanja za članova</h3>
                <div className="stranicasdr">
                <PlaniraneTure/>
                </div>
            </div>
            </div>
        )
    }
}