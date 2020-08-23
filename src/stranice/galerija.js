import React from 'react';
import {Link} from 'react-router-dom';
//galerije
import { galerija1, galerija2, galerija3, galerija4, galerija5, galerija6, galerija7 } from './slike';
import MetaTags from 'react-meta-tags';

export const galerije = [
    {id: '1', naziv: 'Putovanje', coverslika: '/slike/album/1/cover.png', slike: galerija1, lokacija: '/galerija1'},
    {id: '2', naziv: 'MANASTIR SVETOG SAVE OSVEĆENOG', coverslika: '/slike/album/2/cover.png', slike: galerija2, lokacija: '/galerija2'},
    {id: '3', naziv: 'MANASTIR SV.GRIGORIJA HOZEVITE', coverslika: '/slike/album/3/cover.png', slike: galerija3, lokacija: '/galerija3'},
    {id: '4', naziv: 'SOBA TAJNE VEČERE', coverslika: '/slike/album/4/cover.png', slike: galerija4, lokacija: '/galerija4'},
    {id: '5', naziv: 'REKA JORDAN', coverslika: '/slike/album/5/cover.png', slike: galerija5, lokacija: '/galerija5'},
    {id: '6', naziv: 'MANASTIR ČASNOG KRSTA', coverslika: '/slike/album/6/cover.png', slike: galerija6, lokacija: '/galerija6'},
    {id: '7', naziv: 'GOSTOVANJA U TV EMISIJAMA', coverslika: '/slike/album/7/cover.png', slike: galerija7, lokacija: '/galerija7'},
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
                <h3 className="galerijanaslov">{props.naslov}</h3>
                <div className="galerije">
                        {props.children}
                        {props.galerija}
                </div>
                
            </div>
            </div>
            </div>
        )
}

