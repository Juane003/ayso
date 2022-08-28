import { ContactForm, ContactList, Home, NavbarMobile, Presentation, Media } from './Components';
import "./index.css";

const App = () => {

  return (
    <div>
      <NavbarMobile/>
      <div className='separator'></div>
      <Home/>
      <div className='separator'></div>
      <Presentation/>
      <div className='separator'></div>
      <ContactForm/>
      <div className='separator'></div>
      <ContactList/>
      <div className='separator'></div>
      <Media/>
    </div>
  )
}

export default App
