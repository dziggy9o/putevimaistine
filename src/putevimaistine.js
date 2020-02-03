import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


import {ture} from './komponente/sadrzaj/planiraneture';


//Komponente
import Header from './komponente/header';
import Footer from './komponente/footer';
import Kontakt from './komponente/kontakt';
import Sadrzaj from './komponente/sadrzaj';
import Vest from './stranice/vestisablon';
import Uizradi from './stranice/uizradi';

//Stranice
import Onama from './stranice/onama';
import Inicijativa from './stranice/inicijativa';
import Galerija, {galerije} from './stranice/galerija';
import JG from './stranice/jednagalerija';
import TureLista from './stranice/listatura';





class PutevimaIstine extends Component{
constructor(){
    super();
    this.state = {
        klik: false,
        blurovano: false
    };
    this.kliknuo = this.kliknuo.bind(this);
};
kliknuo(){
    this.setState(prethodni => (
        {
            klik: !prethodni.klik,
            blurovano: !prethodni.blurovano
        }
    ));
}
render(){
  const pretKlik = this.state.klik ? "showOn" : "";
  const pretBlur = this.state.blurovano ? "bluruj" : "";
  return (
    <div id="wrapper" >
        <Router>
         <Header blurklasa={pretBlur} klik={this.kliknuo} klasa={`${pretKlik}`} />
         
         <Route exact path='/'>
            <Sadrzaj blurklasa={pretBlur} />
         </Route>
         <Route path='/o-nama'>
             <Onama />
         </Route>
         <Route path='/galerija'>
             <Galerija>
             {galerije.map(galerije => {
                            return (
                                <Link className="galerija" key={galerije.id} to={galerije.lokacija}>
                                    <img alt={galerije.naziv} src={galerije.coverslika} />
                                    <h4>{galerije.naziv}</h4>
                                </Link>
                            )
                        })}   
            </Galerija>
         </Route>
         {galerije.map(x => {
             return (
                <Route key={x.id} path={x.lokacija}>
                    <Galerija galerija={<JG slike={x.slike} />}/> 
                </Route>
             )
         })}
         {ture.map(tura => {
             return (
                 <Route key={tura.id} path={tura.link}>
                     <Vest vest={tura.info} naslov={tura.naslov} />
                 </Route>
             )
         })}
         <Route path='/inicijativa' component={Inicijativa}/>
         <Route path='/ciljevi' component={Uizradi}/>
         <Route path='/zahvalnice' component={Uizradi}/>
         <Route path='/video' component={Uizradi}/>
         <Route path='/putovanja' component={TureLista}/>
         <Kontakt blurklasa={pretBlur} />
         <Footer blurklasa={pretBlur} />
        </Router>
       </div>
  )
}
}

export default PutevimaIstine;
