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
            <div className="stranica onama">
                <img className="headerslika" src="./himage/inicijativah.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">Inicijativa</h3>
                <div className="stranicasdr">
                <p>
                U vremenu smo u kome Srbija proslavlja osam stotina godina autokefalnosti Srpske pravoslavne crkve prateći državničke, crkvene i diplomatske puteve Svetog Save. Promišlju Božijom u ovoj godini u kojoj se obeležava tako značajan jubilej, grupa hodočasnika i poklonika Svete zemlje pokreće inicijativu za osnivanje "Srpske kuće" u Svetom gradu Jerusalimu.
                </p>
                <p>
                U Svetoj Zemlji ima više hrišćanskih svetih mesta koja su od posebnog značaja upravo za Srbe. Među brojnim svetim mestima su i srpske svetinje i zadužbine koje su izgradili, osvećivali, obnavljali i bogato darivali srpski vladari, u kojima su se molili i služili i koje su čuvali srpski monasi. Ima ih dovoljno za izgradnju identiteta jednog naroda. Srpska poklonička hronika je osam vekova duga, a duhovne veze Srba sa Jerusalimom su trajne i neraskidive. Srbi su vazda osećali važnost Jerusalima i odlazak na pokloničko putovanje u Svetu zemlju kao svoju najnasušniju duhovnu potrebu. To je njima bilo zaveštanje prvog arhiepiskopa i prosvetitelja srpskog, Svetoga Save.
                </p>
                <p>
                Na žalost, mnoge od srpskih svetinja u Svetoj zemlji su danas gotovo zaboravljene. Pokretanje Inicijative za otvaranje Srpskog centra u Svetoj zemlji između ostalog ima za cilj da obnovi i utvrdi u srpskom narodu znanje o ovim svetinjama i njihovo poštovanje. Smatramo da je pravi trenutak da se ovo delo pokrene, jer je u svesti srpskog naroda sazrela želja da se napravi, milošću Božjom, a našim trudom i zalaganjem, jedno mesto sabranja svih Srba u Svetome gradu Jerusalimu, jedan centar duhovnosti, kulture i hodočašća za Srbe poklonike Svetoj zemlji.
                </p>
                <p>
                Sveta je zemlja zemaljska otadžbina Gospoda Našeg Isusa Hrista. Poslednjih godina svedoci smo sve većeg broja hodočasnika i hadžija među Srbima iz Srbije i drugih srpskih zemalja i rasejanja, a posebno među mladima, što nas veoma raduje i hrabri. Potraga za sobom kao Bogotražiteljem u sâmoj Svetoj zemlji za Srbe predstavlja povratak onoj istini koju su dobro znali naši preci o Božjem blagoslovu Srbima kao Nebeskom narodu. Veliki je to krst i poslušanje, ali i čast i dar koji nas Srbe čini onim što jesmo. To je naš svetosavski zavet. Ostanimo mu verni. Srpski svetosavski centar u Jerusalimu mogao bi nam svima u tome pomoći.
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