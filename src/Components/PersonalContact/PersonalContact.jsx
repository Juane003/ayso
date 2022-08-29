import './personalContact.css'

const PersonalContact = ({ picture, name, email } ) => {
	return (
		<div className="personal-contact-wrapper">
			<img className="picture" src={picture} />
			<div className="contact-wrapper">
				<a href={`https://mail.google.com/mail/u/0/?source=mailto&to=${email}&fs=1&tf=cm`} target="_blank"className="link-to-mail">{name}</a>	
			</div>
		</div>
	);
}

export default PersonalContact;