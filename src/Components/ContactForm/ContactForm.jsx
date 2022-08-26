import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contactForm.css";

const ContactForm = () => {

	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gd89ud4', form.current, 'O278GCkvF05nJxnxD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		e.target.reset();
  };

	return (
		<div className="form-wrapper" id="contacto">
			<h1 className="contact-title">Contacto</h1>
			<form ref={form} onSubmit={sendEmail}>
				<input className="email-input" name="email" type="email" placeholder="Email" required/>
				<textarea className="message-input" name="message" type="text" placeholder="Escribe tu mensaje aqui!" required/>
				<input className="submit-input" type="submit" value="Enviar"/>
			</form>
		</div>
	)
}

export default ContactForm;