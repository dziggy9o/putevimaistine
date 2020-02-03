import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
//pdf


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';


export default class Inicijativa extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - Inicijativa</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Inicijativa' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/inicijativah.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">Inicijativa</h3>
                <div className="stranicasdr">
                <p>
                Trenutak pred predaju inicijative grupe hodočasnika za otvaranje srpskog centra kulture i hodočašća u Svetom gradu,Jerusalimu!
                <br/>- U vremenu smo u kom Srbija obeležava osamstotina godina autokefalnosti Srpske crkve  prateći državno,crkvene i diplomatske puteve Svetog Save.
                <br/>U ovoj godini koja je jubilej,a promišlju Božijom,grupa hodočasnika pokreće inicijativu za osnivanje "Srpske kuće" u Svetom gradu Jerusalimu.
                <br/>
                <br/>U Svetoj Zemlji ima više hrišćanskih svetih mesta koja su od posebnog značaja za Srbe. Ta sveta mesta su i Srpske svetinje koje su izgradili,osvećivali,darovali,u kojima su se molili i koje su čuvali Srbi.
                <br/>Ima ih dovoljno za izgradnju identiteta jednog naroda,a koje su danas gotovo zaboravljene.
                <br/>Srpska poklonička hronika duga je dakle 8(osam) vekova,duhovni dodiri Srba sa Jerusalimom su trajni i neraskidivi.
                <br/>Povod za poklonička putovanja ili prihvatanje značenja Jerusalima,Srbi su vazda osećali kao najnasušnjiju potrebu.To je bilo zaveštanje prvog Arhijepiskopa i prosvetitelja Srpskog,Svetog Save.
                </p>
                <div style={{textAlign: 'center'}}>
                    <a className='download' href='./download/brosura.pdf' download><FontAwesomeIcon icon={faFilePdf}/><h4>Brosura</h4></a>
                </div>
                </div>
                
            </div>
            </div>
        )
    }
}