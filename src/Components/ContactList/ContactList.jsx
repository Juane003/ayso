import PersonalContact from "../PersonalContact/PersonalContact";
import './contactList.css';
import participants from "@/api";

const ContactList = () => {

  const renderContacts = participants.map((element, index) => {
    const { name, email, picture } = element; 
    return (
      <PersonalContact
        key={index}
        picture={picture}
        name={name}
        email={email}
      />
    )
  });

  return (
    <div className="contacts-wrapper">
      {renderContacts}
    </div>
  )
}

export default ContactList;