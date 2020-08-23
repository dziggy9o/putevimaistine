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
            <div className="stranica onama">
                <img className="headerslika" src="./himage/onama.png" alt="O nama" />
                <h3 className="stranicanaslov">O nama</h3>
                <img className="stranicalogo" src={logob} alt="Logo Putevima Istine" />
                <div className="stranicasdr">
                <p>Udruženje građana ,,PUTEVIMA ISTINE” okuplja poklonike i poštovaoce pravoslavne vere i u njoj Gospoda Našega Isusa Hrista Sina Božjeg, Presvete Bogorodice i Prisnodjeve Marije, Svetog proroka Preteče i Krstitelja Jovana, kao i Srpske pravoslavne hrišćanske crkve i svih običaja, tradicije, istinskih i neprolaznih pravoslavnih hrišćanskih vrednosti koje je u Srbskom narodu utemeljio i postavio Sveti Sava.</p>
                <p>U tom smislu Udruženje ,,Putevima istine” organizuje tribine, predavanja i hodočasnička, poklonička putovanja u Svetu zemlju – Izrael i Palestinu, i to u Sveti grad Jerusalim, kao i Vitlejem i Nazaret, zatim odlazak na pogruženje u reci Jordan, posetu Galilejskom jezeru i mnogim drugim svetim mestima iz Starog i Novog Zaveta. Naše aktivnosti su usmerene na širenje istine i ljubavi među ljudima, poštujući pravoslavnu veru i tradiciju. </p>
                <p>Pozivamo vas da nam se pridružite, da se učlanite u Udruženje i doživite nezaboravna putovanja koja se pamte ceo život. Svako ko poseti Svetu zemlju dobija Gramatu – posebno pisano svedočanstvo o hadžiluku izdato od strane Jerusalimske pravoslavne patrijaršije, i stiče nasledno pravo da ispred svog imena i prezimena doda naziv HADžI, što znači Poklonik Svetoj zemlji.</p>
                <p>Udruženje građana ,,Putevima istine” je osnovano sa sedištem u Valjevu i predstavništvom u Beogradu. Udruženje okuplja mnoge članove i prijatelje iz Srbije, regiona i sveta, dijaspore - rasejanja.</p>
                </div>
                
            </div>
            </div>
        )
    }
}