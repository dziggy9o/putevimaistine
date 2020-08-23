import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import {ture} from '../sadrzaj/planiraneture';

export const vestiattr = [
   
   {slika: './vesti/vestnovosti.jpg', naslov: '“Večernje novosti” sa hodočasnicima u manastiru Svetog Save Osvećenog', tekst: 'Saznaj više', info: 'proba', link: 'https://www.novosti.rs/vesti/naslovna/reportaze/aktuelno.293.html:843999-Himna-prosvetitelju-odjekuje-od-Judejske-pustinje-do-Srbije-Vecernje-novosti-sa-hodocasnicima-u-manastiru-Svetog-Save-Osvecenog-VIDEO', sadrzaj: {datum: 'b', p1: 'c', p2: 'c3'}},


]



class Vesti extends Component{
    render(){
        const prikaziTure = ture.length > 0 ? ture.map((vest, i) => {
            return (
                <div id="pi-pozicija" style={{color: '#BC9B72', backgroundSize: 'cover', backgroundImage: `url(${vest.slika})`}} key={i}>
                        <h4 className="slajdernaslov">{vest.naslov}</h4>
                        <a target="_blank" href={vest.link} rel="noopener noreferrer" className="procitajvise">{vest.tekst}</a>
                </div>
            )
        })
        : null;
        const prikaziVesti  = vestiattr.length > 0 ? vestiattr.map((vest, i) => {
            return (
                <div id="pi-pozicija" style={{color: '#BC9B72', backgroundSize: 'cover', backgroundImage: `url(${vest.slika})`}} key={i}>
                        <h4 className="slajdernaslov">{vest.naslov}</h4>
                        <a target="_blank" rel="noopener noreferrer" href={vest.link} className="procitajvise">{vest.tekst}</a>
                </div>
            )
        })
        : null;

        return(
            <Carousel 
                showThumbs={false}
                interval={10000}
                showIndicators={false}
                emulateTouch
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                showStatus={false}
            >
            {prikaziVesti}    
            {prikaziTure}
            
            </Carousel>
        )
    }
}
export default Vesti;