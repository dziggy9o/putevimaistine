import React from 'react';
import {Link} from 'react-router-dom';
//galerije
import { galerija1 } from './slike';
import MetaTags from 'react-meta-tags';

export const galerije = [
    {id: '1', naziv: 'Putovanje', coverslika: '/slike/album/1/cover.png', slike: galerija1, lokacija: '/galerija1'},
    
]

export default function Galerija(props) {

        return (
            <div>
            <MetaTags>
            <title>"Putevima istine" - Galerija slika</title>
            <meta name="description"
                  content="Galerija slika sa putovanja udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Galerija slika' />
            </MetaTags>
            <div className="pisadrzaj">
            <div className="stranica">
                <img className="headerslika" src="/himage/galerijah.png" alt="O nama" />
                <h3 className="galerijanaslov"><Link to='/galerija'>Galerija slika</Link></h3>
                <div className="galerije">
                        {props.children}
                        {props.galerija}
                </div>
                
            </div>
            </div>
            </div>
        )
}

