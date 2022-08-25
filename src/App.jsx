import { ContactForm, Home, NavbarMobile, Presentation } from './Components'
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
    </div>
  )
}

export default App
