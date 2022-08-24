import { useState } from "react";
import { LogoCarousel } from "../LogoCarousel";
import './navbarMobile.css'
import buttonLogo from 'C:/Users/54336/Desktop/projects/personal-projects/ayso-tp-2/src/assets/menu-icon.svg';

const NavbarMobile = () => {
  
  const [showOptions, setShowOptions] = useState(false);

  const handleShowoptions = () => setShowOptions(!showOptions);

  return (
    <div>
      <div className="main-wrapper">
        <LogoCarousel/>
        <button onClick={handleShowoptions}><img src={buttonLogo}/></button>
      </div>
      {showOptions ?
      <div className="options-wrapper">
        <a href="">Inicio</a>
        <a href="">Lorem Ipsum</a>
        <a href="">Lorem Ipsum</a>
        <a href="">Sobre Nosotros</a>
      </div> 
      : null}
    </div>
  )
}

export default NavbarMobile;