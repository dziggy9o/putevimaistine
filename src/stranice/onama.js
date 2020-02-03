import React, {Component} from 'react';
import logob from '../slike/logob.svg';
import MetaTags from 'react-meta-tags';

export default class Onama extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - O nama</title>
            
             <meta property="og:title" content='"Putevima istine" - O nama' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/onama.png" alt="O nama" />
                <h3 className="stranicanaslov">O nama</h3>
                <img className="stranicalogo" src={logob} alt="Logo Putevima Istine" />
                <div className="stranicasdr">
                <h3>ŠTA JE ISTINA, I ŠTA ZNAČI?</h3>
                <p>Crkva je proizvod istine. Ona ne stvara istinu. Crkva je nastala tako sto je prihvatila božanska otkrovenja.
                    <br />Crkva nije izvor tih otkrovenja.
                    <br />Istina postoji pre crkve, ona joj prethodi".
                    <br />U Bibliji postoji barem tri kriterijuma istine:
                    <br />1) Biblija je istina: „Osveti ih istinom svojom: reč je tvoja Božija istina." Jovan 17:17
                    <br />2) Isus je istina: „Isus mu reče: ja sam pus istine i života, niko neće doći k ocu do kroz mene". Jovan 14:6,7
                    <br />3) Sveti Duh je istina; "Kada On, Duh istine dođe, upitaće vas u istinu. Dakle Bog je istina koja nam je objavljena u Bibliji, preko Isusa Hrista i uticajem Duha Svetog.
                    <br />Isus nije davao svoje mišljenje,nego je objavljivao istinu.
                    <br />"I poznaćate istinu, i istina će vas izbaviti". Jovan 8.32
                    <br />Isus odgovori: „zato dođoh na svet da svedočim istinu. I svaki koji je od istine sluša glas moj".Jovan 18:37
                    <br />- Isusa Hrista su ubili zato što je govorio istinu.Tim li vam posta neprijatelj istinu vam govoreći? Apostol Pavle, Galatima 4:16
                    <br />- DA BI SPREČIO ZABORAVLJANJE ISTINE OBRIŠI PRAŠINU SA SVOJE BIBLIJE
                    <br /><br />
                    - Ponosni što smo potomci Svetoga Save, svakog dana želimo da svojim delima, trudom, zalaganjem, negovanjem a pre svega kroz očuvanje  SVETE VERE PRAVOSLAVNE potvrdimo da smo dostojni potomci koji istinski neguju uspomenu na Rastka Nemanjića - Svetog Savu, kao: duhovnika i prvog Arhijepiskopa Srpske pravoslavne crkve, zakonodavca, književnika, diplomatu, zadužbinara i ktiktora,  učitelja i prosvetitelja.
                    <br /><br />
                    - Upravo je jedano istinsko patriocko delo, poduhvat, inicijativa za osnivanje SRPSKE KUĆE KULTURE I HODOČAŠĆA U SVETOM GRADU JERUSALIMU, okupila grupu Svetosavaca da osnuje udruženje  „PUTEVIMA ISTINE". Koje će svoj rad usmerite ka: očuvanju Pravoslavne vere i promovisanje Svetosavskog pravoslavlja, zaštita tradicionalnih vrednosti porodicnog života, kulture, očuvanje nacionalnog identiteta i tradicije Srpskog naroda.
                    </p>
                </div>
                
            </div>
            </div>
        )
    }
}