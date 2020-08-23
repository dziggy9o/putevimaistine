import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {Link} from 'react-router-dom';
//pdf


export default class Vest01 extends Component {
    render(){
        return (
            <div className="pisadrzaj">
            <MetaTags>
            <title>"Putevima istine" - MANASTIR SVETOG SAVE OSVEĆENOG</title>
            <meta name="description"
                  content="Inicijativa udruženja"
    />
             <meta property="og:title" content='"Putevima istine" - Inicijativa' />
            </MetaTags>
            <div className="stranica">
                <img className="headerslika" src="./himage/vesth.png" alt="Inicijativa" />
                <h3 className="stranicanaslov">MANASTIR SVETOG SAVE OSVEĆENOG</h3>
                <div className="stranicasdr">
                <p>
                Zašto se Sveti Sava zove Osvećen? Osvećen još u utrbi svoje majke.Sveti Sava monah postaje u svojoj 8 godini života. Sa svojih 18 godi. Dolazi u Svetu Zemlju i postaje poslušnik Sv. Jeftimija Velikog. Godine 478 po otkrovenju anđela dolazi na mesto današnje Lavre i počinje da organizuje monaški život. Pošto prva crkv nazvana teoktisa koja je bila posvećena Svetom Nikoli nije bila dovoljna za brastvo Sv.Save, podiže veliku crkvu i posvećuje je Presvetloj Bogorodici. Život Svetog Save je bio askecki, kao sami anđeli svojim načinom života dostigao je punoću vrline. Poznato je da su se svetitelju često javljali bnđeli, čak ga pratili na njegovim putovanjima. Jedan anđeo mu je otkrio da treba da dođe na mesto gde je podigao lavru i da se tu podvizava. Drugi anđeo mu je otkrio vreme upokojenja Svetog Antima Zatvornika i monaha Jakova. Jedan anđeo je pratio svetitelja  prilikom njegove posete caru Anastasiju u Carigrad 502 godine kad je sam car vido anđela. Svetom Savi se javila i sama Presvetla Bogorodica i obećala da svi monasi koji se budu podvizavli na ovom taškom mestu a ispune monaški podvig zadobiti carstvo nebesko a da će se lavra održati do drugog dolaska Gospoda Isusa Hrista. Sava Osvećeni se upokojio 523 g. 
                <br/>
                <br/>- IZVOR VODE
                <br/>U pećini nad kojom je podignuta lavra neprestano teče voda. Ovu vodu darovo je sam Hristos, pošto se Sveti Sava molio da monasi ne idu nekoliko kilometara severno kako bi zahvatili vodu. Jedino u lavri postoji izvor iako je cela pustinja bezvodna.
                <br/>
                <br/>- PALMA SV. SAVE
                <br/>Palmu je lično zasadio Sveti Sava, a drugačije se zove FINIKA. Drvo je izraslo i bilo dugačko 15 metara. Međutim tokom krstaških ratova, krstaši  mošti Sv. Save odnose u Veneciju gde su bile sve do 1965 god. U među vremenu dok su mošti bile u Veneciji drvo se srušilo i istrulilo. Monasi su bili mnogo tužni što mošti nisu u Lavri i što se drvo osušilo. Lupovli si su monasi jedno, drugo, treće drvo i zasađivli i svko se sušilo. Onda 1960 Sveti Sava se javlja u snu monahu i kaže mu: Nemojte da se sekirate, izićiće lastar koji će biti na mestu tog starog koji sam ja posadio, a nije rekao kad će i kaže : Kad izađe Lastar tad ću ja doći. Lastar je iznikao 1960 a papa iz Rima 1965 zove patrijaha u Jerusalim, Timoteja i kaže mu da dođe u Rim da uzme mošti Svetog Save. Patrijah šalje monaha Serafima koji je bio iguman manastira, a upokojio se u 102 godini. Mošti su donete u Jerusalim i i položene pored Groba Gospodnjeg da tu budu 15 dana, međutim ubrzo se javlja Sv. Sava patrijahu i govori mu odmah mošti vrate u lavru,tako je i bilo.
                <br/>- Kad su mošti donite u manastir monasi su hteli da presvulu odežde latinske sa novim. Prilikom presvlačenja Sv. Savv se uspravio da ga lakše presvulu.
                <br/>- U manastiru se ne jedu jabuke jer se Sv. Sava borio sa mišlju dali da je pojede ili ne u vreme kad nije bio blagoslov da se jede.
                <br/>- Zmije i škorpije nikad nisu ujele monhe.
                <br/>- Sv. Jovan Damaskin se podvizavo u Lavri
                <br/>
                <br/>SRBI U SVETOM SAVI
                <br/>
                <br/>Kada je Sveti Sava Srpski, stupio u crkvu manastira desilo se čudo: žezlo Sveto Save Osvećenog,koje je na tronu stajalo 700 god. iz cista mira je mira odjednom je palo. Zbunjeni monasi, vratiše žeslo na svoje mesto. Međutim sledećeg jutra kad Sv. Sava opet uđe u crkvu žezlo opet pade. Monasi se setiše zaveštanja da  će stići monah kraljevskoga roda i da će se zvati istog imena i njemu da poklone žezlo. Darove koje je dobio : ŽEZLO, TROJERUČICU I MLEKOKOPITATALjICU !
                <br/>- Iz hrisovulje carice mare žene turskog sultana Murata II , a ćerke Đurađa Brankovića, vidi se da postoji vidi se da postoji ugovor između Srpske Crkve i JER. Patrijašije. Srpski monasi došli su u lavru Sv. Save i oslobodili je od razbojnika, oni su tada sazidali velilu kulu i u njoj paraklis posvećen Sv. Simeonu. Kad su grci došli na tron patrijašije oni su isplatili srbima dug za gradnju kule i potavili grka za igumana. Srpski monasi su lavrom upraljali 130 god. Celog 16 i prvu polovinu 17 veka.
                </p>
                <Link className="galerija" to='/galerija2'>
                                    <img alt='MANASTIR SVETOG SAVE OSVEĆENOG' src='/slike/album/2/cover.png' />
                                    <h5>Galerija slika</h5>
                 </Link>
                </div>
                
            </div>
            </div>
        )
    }
}