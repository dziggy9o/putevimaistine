import React, {Component} from 'react';
//import { Carousel } from 'react-responsive-carousel';
import {ture} from '../sadrzaj/planiraneture';
import {Carousel} from 'react-bootstrap';

export const vestiattr = [
   
   //{id: 'v1', slika: './vesti/uspesno.jpg', naslov: 'USPEŠNO ORGANIZOVANO HODOČASNIČKO PUTOVANJE', tekst: 'Saznaj više', info: 'proba', link: '/glvest01', sadrzaj: {datum: 'b', p1: 'c', p2: 'c3'}},
   {id: 'v2', slika: './vesti/vestnovosti.jpg', naslov: '“Večernje novosti” sa hodočasnicima u manastiru Svetog Save Osvećenog', tekst: 'Saznaj više', info: 'proba', link: 'https://www.novosti.rs/vesti/naslovna/reportaze/aktuelno.293.html:843999-Himna-prosvetitelju-odjekuje-od-Judejske-pustinje-do-Srbije-Vecernje-novosti-sa-hodocasnicima-u-manastiru-Svetog-Save-Osvecenog-VIDEO', sadrzaj: {datum: 'b', p1: 'c', p2: 'c3'}},


]



class Vesti extends Component{
    render(){
        const prikaziTure = ture.length > 0 ? ture.map((vest, i) => {
            return (
                <Carousel.Item key={vest.id}>
                    <img
                        className="d-block"
                        src={vest.slika}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                    
                    <a href={vest.link} target='_blank' rel="noopener noreferrer">{vest.naslov}</a>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
        : null;
        const prikaziVesti  = vestiattr.length > 0 ? vestiattr.map((vest, i) => {
            return (
                <Carousel.Item key={vest.id}>
                <img
                    className="d-block"
                    src={vest.slika}
                    alt="First slide"
                    />
                 <Carousel.Caption>
                 <a href={vest.link} target='_blank' rel="noopener noreferrer">{vest.naslov}</a>
                    </Carousel.Caption>
            </Carousel.Item>
            )
        })
        : null;

        return(
            <Carousel 
            indicators={false}
            >
            {prikaziVesti}    
            {prikaziTure}
            
            </Carousel>
        )
    }
}
export default Vesti;