import React,{Component} from 'react';

import { JerusalimJedan } from '../putovanja';


import InfoTure from './ptfunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faAngleDoubleRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export const ture = [
    {id: 1, naslov: 'Pokloničko putovanje u svetu zemlju', lokacija: 'Jerusalim', info: <JerusalimJedan />, datum: '23.01.2020.', slika: './vesti/jerusalim1.jpg', tekst: 'Saznaj više', link: '/jerusalim-23012020', sadrzaj: {datum: 'b', p1: 'c', p2: 'c3'} },
]

class PlaniraneTure extends Component{


    render() {
        const aktuelneTure = ture.length > 0 ? 
            ture.map(tura => {
                return (
                    
                    <div className="ture" key={tura.id}>
                        <i><FontAwesomeIcon icon={faAngleDoubleRight} /></i>
                        <h5 className="np">{tura.naslov}</h5>
                        <i><FontAwesomeIcon icon={faGlobeEurope} /></i>
                        <h5>{tura.lokacija}</h5>
                        <i><FontAwesomeIcon icon={faCalendarCheck} /></i>
                        <h5>{tura.datum}</h5>
                        <InfoTure info={tura.link} />
                    </div>
                    
                )
            })    
        : <div>Trenutno nema tura</div> ;

        return (
            <div className="pi-planiraneture"> 
                <header className="major">
                    <h3>Planirane ture</h3>
                    {aktuelneTure}
                </header>
            </div>

        )
    }
}
export default PlaniraneTure;