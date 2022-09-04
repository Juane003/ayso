import { ContactForm} from "../ContactForm";
import { ContactList } from "../ContactList";
import "./contacts.css";

const Contacts = () => {


  return (
    <div className="contacts-title-wrapper">
      <h1 className="contact-title" id="contacto">Contacto</h1>
      <div className="contacts-page-wrapper">
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  )
}

export default Contacts;