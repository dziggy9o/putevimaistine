import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import * as emailjs from 'emailjs-com';


const kontaktPodaci = [
    {ime: 'Email', tekst: <a href="mailto:kancelarija@putevimaistine.rs">kancelarija@putevimaistine.rs</a>, ikona: <FontAwesomeIcon icon={faEnvelope} />},
    {ime: 'Telefon', tekst: <span><a href="tel:0643509434">+381 64 35 09 434</a></span>, ikona: <FontAwesomeIcon icon={faPhone} />},
    {ime: 'Adresa', tekst: <span>Ivana Cankara 1<br />14000 Valjevo<br />Srbija</span>, ikona: <FontAwesomeIcon icon={faHome} />}
]

class Kontakt extends Component{
	constructor(props) {
		super(props);
		this.state  = {
			poruka: '',
			ime: '', 
			email: '',
			greska: {
				poruka: '',
				ime: '',
				email: ''
			},
			uspesno: ''
		};
		this.izmenaPoruke = this.izmenaPoruke.bind(this);
		this.izmenaImena = this.izmenaImena.bind(this);
		this.izmenaEmail = this.izmenaEmail.bind(this);
		this.potvrda = this.potvrda.bind(this);
		this.obrisati = this.obrisati.bind(this);
	}
	izmenaPoruke = e => {
		this.setState({
			poruka: e.target.value
		})
	}
	izmenaImena = e => {
		this.setState({
			ime: e.target.value
		})
	}
	izmenaEmail = e => {
		this.setState({
			email: e.target.value
		})
	}
	proveriValidnost = () => {
		let greska = {};
		let validnostForme = true;

		if(!this.state.ime || this.state.ime.length < 3) {
			greska.ime = 'Minimalno tri slova!';
			validnostForme = false;
		}
		if(!this.state.poruka || this.state.poruka.length < 10) {
			greska.poruka = 'Minimalno 10 karaktera!';
			validnostForme = false;
		}
		if(!this.state.email || this.state.email.length < 3) {
			greska.email = 'Minimalno tri slova!'
			validnostForme = false;
		}
		let patern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		if(!patern.test(this.state.email)) {
			greska.email = 'adresa nije validna!';
			validnostForme = false;
		}
		this.setState({
			greska: greska
		})
		return validnostForme	
	} 

	potvrda  = (e) => {
		e.preventDefault();
		if(!this.proveriValidnost()) {
			return
		}

		var tempParams = {
			from_name: this.state.ime + '(' + this.state.email + ')',
			to_name: 'Igore',
			message_html: this.state.poruka,
			reply_to: this.state.email
		}
		emailjs.send('default_service', 'template_8jpVPFI6', tempParams, 'user_SPkdW4TosAmrkXqkUij5r')
			.then(function (res) {
				alert('Uspešno ste poslali poruku. Hvala Vam na ukazanom poverenju!')
				console.log('Uspesno!', res.status, res.text);
			}, function(err) {
				
				console.log(err)
			})
			this.setState({
				poruka: '',
				email: '',
				ime: ''
			})
	}
	

	obrisati = () => {
		this.setState({
			poruka: '',
			email: '',
			ime: ''
		})
	}


    render() {
        return (
            <section id="contact" className={`${this.props.blurklasa} fshadow`}>
						<div className="inner">
							<section>
								<form method="post" action="#">
									<div className="fields">
										<div className="field half">
										<label htmlFor="name">Ime <h6 style={{color: '#BC9B72',fontWeight: 'bold', display: 'inline'}}> {this.state.greska.ime}</h6></label>
											<input type="text" name="name" value={this.state.ime} onChange={this.izmenaImena} id="name" />
										</div>
										<div className="field half">
											<label htmlFor="email">Email <h6 style={{color: '#BC9B72',fontWeight: 'bold', display: 'inline'}}> {this.state.greska.email}</h6></label>
											<input type="text" name="email" value={this.state.email} onChange={this.izmenaEmail} id="email" />
										</div>
										<div className="field">
											<label htmlFor="message">Poruka <h6 style={{color: '#BC9B72',fontWeight: 'bold', display: 'inline'}}> {this.state.greska.poruka}</h6></label>
											<textarea name="message" id="message" value={this.state.poruka} onChange={this.izmenaPoruke} rows="6"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Pošalji poruku" className="primary" onClick={this.potvrda} /></li>
										<li><input type="reset" value="Obriši" onClick={this.obrisati}/></li>
										
									</ul>
								</form>
							</section>
							<section className="split">
                                {kontaktPodaci.map((kontakt, i) => {
                                    return (
                                        <section key={i}>
                                            <div className="contact-method">
                                            <span className="icon solid alt">{kontakt.ikona}</span>
                                                <h3>{kontakt.ime}</h3>
                                                {kontakt.tekst}
                                            </div>
                                        </section>
                                    )
                                })}
							</section>
						</div>
					</section>
        )
    }
}
export default Kontakt;