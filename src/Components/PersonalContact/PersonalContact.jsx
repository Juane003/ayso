import './personalContact.css'

import laitoPic from "C:/Users/jemil/Desktop/projects/ayso/src/assets/pictures/WhatsApp Image 2022-08-27 at 17.55.44.jpeg"

const PersonalContact = ({ picture, name, email } ) => {
	return (
		<div className="personal-contact-wrapper">
			<img className="picture" src={laitoPic} />
			<div className="contact-wrapper">
				<a href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${email}`} className="link-to-mail">{name}</a>	
			</div>
		</div>
	);
}

export default PersonalContact;