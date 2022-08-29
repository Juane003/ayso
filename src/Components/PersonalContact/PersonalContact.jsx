import './personalContact.css'

const PersonalContact = ({ picture, name, email } ) => {
	return (
		<div className="personal-contact-wrapper">
			<img className="picture" src={picture} />
			<div className="contact-wrapper">
				<a href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${email}`} target="_blank"className="link-to-mail">{name}</a>	
			</div>
		</div>
	);
}

export default PersonalContact;