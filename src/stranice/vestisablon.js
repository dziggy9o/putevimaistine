import React, {Component} from 'react';


export default class Vest extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <div className="stranica">
                <img className="headerslika" src="./himage/onama.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">{this.props.naslov}</h3>
                <div className="stranicasdr">
                {this.props.vest}
                </div>
            </div>
            </div>
        )
    }
}