import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
//pdf


export default class PutovanjeMaj extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>POKLONIČKO HODOČASNIČKO PUTOVANJE U SVETU ZEMLJU, IZRAEL I PALESTINU</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - USPEŠNO ORGANIZOVANO HODOČASNIČKO PUTOVANJE' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/glvest01.png" alt="Inicijativa" />
                <h3 style={{backgroundColor: '#8B7565', padding: '3px'}} className="stranicanaslov">POKLONIČKO HODOČASNIČKO PUTOVANJE U SVETU ZEMLJU, IZRAEL I PALESTINU</h3>
                <div className="stranicasdr">
                <p>
                Prijavite se za pokloničko putovanje života, vrhunski duhovni doživljaj koji se pamti i ostavlja u amanet potomstvu,
u Svetu zemlju - Jerusalim, posećuju se najsvetija mesta iz života Isusa Hrista u Izraelu i Palestini iz Starog i Novog zaveta,
Hram vaskrsenja u Jerusalimu, Vitlejem, reka Jordan, Nazaret, Galilejsko jezero, gora Tavor, Maslinska gora, Gora kušanja,
manastir Svetog Save u Judejskoj pustinji, Jerihon, kanjon Vadikelt, Tel Aviv ...
Putovanje se organizuje od 11 do 18.05.2020.g. iz Beograda za Izrael, aviolinijom preko Budimpešte.
Ifno i organizator - Udruženje "Putevima istine"
                <br/>
                Info na tel/viber: <a href="tel:0643509434">+381 64 35 09 434</a>, Hadži Jovan Petrović, 
                <br/>
                email: <a href="mailto:kancelarija@putevimaistine.rs">kancelarija@putevimaistine.rs</a>
                <br/>
                <br/>
                Napomena: pripremiti dovoljno memorije za fotografije i video z mmobilnom, foto-aparat itd., za nezaboravne uspomene,
a svi hodočasnici dobijaju gramatu Jerusalimsek patrijaršije i nasledno pravo da ponesu titulu Hadži uz svoje ime.
Putovanje Udruženje za svoje članove, a član se postaje upoznavanje rada Udruženja i popunjavanjem pristupnice.
Članarina je besplatna. DOBRODOŠLI! U pratnji hodočasnika uvek ide i duhovnik putovanja, svešenik SPC. 
Cena hodočasnog putovanja: povoljna za članove Udruženja. 

                </p>
                </div>
                
            </div>
            </div>
        )
    }
}