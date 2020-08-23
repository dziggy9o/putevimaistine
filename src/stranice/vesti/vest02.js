import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Vest02 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - MANASTIR SV.GRIGORIJA HOZEVITE</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Inicijativa' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/vesth.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">MANASTIR SV.GRIGORIJA HOZEVITE</h3>
                <div className="stranicasdr">
                <p>
                ....je iz 4 veka.U sklopu manastira se nalazi pećina u kojoj se podvizavao Sv.Ilija gde ga je gavran hranio dve ipo godine.Nalaze se mošti Sv.Jovana Rumuna.Manastir su potpuno uništili Persijanci,oko 500 godina je bio napušten, dolaskom krstaša krenula je obnova, ali posle njihovog odlaska opet je pao u zaborav, sve do 1878 kada grčki monah Kalinikos započinje obnovu manastira obnovu i završav je 1901 g. U svom surovom pohodu Persijanci su 614 ubili oko 3 hiljadi monaha .Na ovom svetom mestu propovedao je Sv.Jovan Krstitelj.
                <br/>
                <br/>SVETI JOVAN RUMUN
                <br/>
                <br/>Na krštenju dobi ime Ilija,njegovi roditelji Maksim i Katarina ne sluteći da će im se sin podvizavati na mestu na kom se Sv.Ilija podvizavao. Kao mlad se zamonašio u manastiru Svetog Pajsija Veličkovskog u Njemcu,pod imenoo Jakov. Od početka uzor su mu bili podvižnici Sv.Zemlje Sv.Jeftimije Valiki, Sv.Sava Osvećeni, Teodosije Veliki. Kada su 1924 g.Rumuni prihvatili gregorijanski kalendar, strogi podvižnik je sa mnogo rumunskih monaha napustio otađbinu i krenuo put Svete Zemlje.Bio je veoma strog prema sebi, a da bi sačuvo duhovni mir, uopšte nije imao kontakt sa ne pravoslavnima. Umeo je da govori da grešnost ovog sveta ide brže nego što putuje misao, i da se treba čuvati mode jer sa modom vetar grešnosti putuje brzo kao misao. Bavio se pisanjem duhovnog sadržaja, i podučavnjem hrišćana da ne osuđuju „jer kakvom merom merite tako će ti se meriti".

                <br/>
                </p>
                <Link className="galerija" to='/galerija3'>
                                    <img alt='MANASTIR SV.GRIGORIJA HOZEVITE' src='/slike/album/3/cover.png' />
                                    <h5>Galerija slika</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}