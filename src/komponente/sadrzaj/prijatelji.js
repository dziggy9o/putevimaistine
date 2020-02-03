import React, {Component} from 'react';

class Prijatelji extends Component {
    render() {
        const prijateljiSajta = [
            {id: '1', slika: './prijateljisajta/cms.png', adresa: 'http://www.citymarketingservice.com/'},
            {id: '2', slika: './prijateljisajta/dz.png', adresa: 'http://www.dzentlmen.rs/'},
            {id: '3', slika: './prijateljisajta/sr.png', adresa: 'https://www.srbija.gov.rs/'},
            {id: '4', slika: './prijateljisajta/spc.png', adresa: 'http://www.spc.rs/sr'},
            {id: '5', slika: './prijateljisajta/dg.png', adresa: 'http://diasporagroup.org/'},
            {id: '6', slika: './prijateljisajta/csh.png', adresa: 'http://www.cityshop.rs/'},
            {id: '7', slika: './prijateljisajta/upg.png', adresa: 'http://www.udruzenje.rs/'}
        ]
        return (
            <div>
                {prijateljiSajta.map(ps => {
                    return (
                        <div key={ps.id} className="ps"> 
                        <a href={ps.adresa} target="_blank" rel="noopener noreferrer">
                            <img src={ps.slika} alt="Prijatelj sajta"/>
                        </a>
                        </div>
                    )
                })}
            </div>

        )
    }
}
export default Prijatelji;