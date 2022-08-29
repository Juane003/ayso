import PersonalContact from "../PersonalContact/PersonalContact";
import './contactList.css';
import { emiPicture, estebanPicture, nachoPicture, brianPicture, laiPicture, roPicture } from "@/assets/pictures";

const names = ["Rocio Saucedo", "Estanislao Chiaraluce", "Brian Velazquez", "Esteban Pereira", "Ignacio Laena", "Juan Emilio Rivero"];
const emails = ["rocio.saucedo.1996@gmail.com	", "estanislaochiaraluce@gmail.com", "brianezequielv2004@gmail.com", "estebanpereira748@gmail.com", "ignaciolaena@gmail.com", "j.emilio164@gmail.com"];
const pictures = [roPicture, laiPicture, brianPicture, estebanPicture, nachoPicture, emiPicture]

const ContactList = () => {

  const renderContacts = names.map((element, index) => {
    return (
      <PersonalContact
        key={index}
        picture={pictures[index]}
        name={element}
        email={emails[index]}
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