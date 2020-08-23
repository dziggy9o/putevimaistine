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
import Video from './stranice/video';

//Stranice
import Onama from './stranice/onama';
import Inicijativa from './stranice/inicijativa';
import Galerija, {galerije} from './stranice/galerija';
import JG from './stranice/jednagalerija';
import TureLista from './stranice/listatura';
import Vest01 from './stranice/vesti/vest01';
import Vest02 from './stranice/vesti/vest02';
import Vest03 from './stranice/vesti/vest03';
import Vest04 from './stranice/vesti/vest04';
import Vest05 from './stranice/vesti/vest05';
import Glvest01 from './stranice/vesti/glvest01';
import PutovanjeMaj from './stranice/vesti/putovanjemaj2020';





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
                                    <h5>{galerije.naziv}</h5>
                                </Link>
                            )
                        })}   
            </Galerija>
         </Route>
         {galerije.map(x => {
             return (
                <Route key={x.id} path={x.lokacija}>
                    <Galerija naslov={x.naziv} galerija={<JG slike={x.slike} />}/> 
                </Route>
             )
         })}
         {/* {ture.map(tura => {
             return (
                 <Route key={tura.id} path={tura.link}>
                     <Vest vest={tura.info} naslov={tura.naslov} />
                 </Route>
             )
         })} */}
         <Route path='/inicijativa' component={Inicijativa}/>
         <Route path='/ciljevi' component={Uizradi}/>
         <Route path='/zahvalnice' component={Uizradi}/>
         
         <Route path='/putovanja' component={TureLista}/>
         <Route path='/vest01' component={Vest01}/>
         <Route path='/vest02' component={Vest02}/>
         <Route path='/vest03' component={Vest03}/>
         <Route path='/vest04' component={Vest04}/>
         <Route path='/vest05' component={Vest05}/>
         <Route path='/glvest01' component={Glvest01}/>
         <Route path='/putovanjemaj2020' component={PutovanjeMaj}/>
         <Route path='/video' component={Video}/>
         <Kontakt blurklasa={pretBlur} />
         <Footer blurklasa={pretBlur} />
        </Router>
       </div>
  )
}
}

export default PutevimaIstine;
