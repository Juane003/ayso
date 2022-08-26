import { useState } from "react";
import { LogoCarousel } from "../LogoCarousel";
import './navbarMobile.css'
import 'animate.css';
import ButtonLogo from 'C:/Users/54336/Desktop/projects/personal-projects/ayso/src/assets/menu-icon.svg';
import useAnimation from "../../Hooks/useAnimation";

const NavbarMobile = () => {
  
  const [showOptions, setShowOptions] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const shouldRender = useAnimation(showOptions, 450);  

  const entranceAnimation = {'animation' : '0.5s ease 0s 1 normal none running fadeInDown'};

  const exitAnimation = {'animation' : '0.5s ease 0s 1 normal none running fadeOutUp' };

  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsActive(!isActive);
  }

  return (
    <div className="sticky">
      <div className="main-wrapper">
        <LogoCarousel/>
        <button onClick={handleClick} className={`menu-btn ${isActive ? "active" : null}`}><img src={ButtonLogo}/></button>
      </div>
      {shouldRender &&
      <div onClick={handleClick} style={showOptions ? entranceAnimation : exitAnimation} className={`options-wrapper animate__animated `}>
        <a href="#home">Inicio</a>
        <a href="#presentacion">Presentation</a>
        <a href="#contacto">Contacto</a>
        <a href="">Sobre Nosotros</a>
      </div> 
      }
    </div>
  )
}

export default NavbarMobile;