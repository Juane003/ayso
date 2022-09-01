import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contactForm.css";

const ContactForm = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_htwvb91', 'template_gd89ud4', form.current, 'O278GCkvF05nJxnxD')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
			e.target.reset();
  };

	return (
		<div className="form-wrapper" id="contacto">
			<form ref={form} onSubmit={sendEmail}>
				<input className="email-input" name="email" type="email" placeholder="Email" id="email" required></input>
				<input className="message-input" name="message" id="message" type="text" placeholder="Escribe tu mensaje aqui!" required/>
				<div className="submit-container">
					<input className="submit-input" type="submit" value="Enviar"/>
				</div>
			</form>
		</div>
	)
}

export default ContactForm;