import React, {Component} from 'react';
import logob from '../slike/logob.svg'

export default class Uizradi extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <div className="stranica">
                <img className="headerslika" src="./himage/onama.png" alt="O nama" />
                <h3 className="stranicanaslov">Stranica je u izradi</h3>
                <img className="stranicalogo" src={logob} alt="Logo Putevima Istine" />
                <div className="stranicasdr">
                <p>Uskoro više informacija</p>
                </div>
                
            </div>
            </div>
        )
    }
}