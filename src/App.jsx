import { Home, NavBar, Presentation, Contacts, Media } from './Components';
import "./index.css";

const App = () => {

  return (
    <div>
      <NavBar/>
      <div className='separator'></div>
      <Home/>
      <div className='separator'></div>
      <Presentation/>
      <div className='separator'></div>
      <Contacts/>
      <div className='separator'></div>
      <Media/>
    </div>
  )
}

export default App
