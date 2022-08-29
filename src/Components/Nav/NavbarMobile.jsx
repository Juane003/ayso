import { useState } from "react";
import { LogoCarousel } from "../LogoCarousel";
import './navbarMobile.css'
import 'animate.css';
import { menuLogo } from '@/assets/logos/';
import useAnimation from "../../Hooks/useAnimation";

const NavbarMobile = () => {
  
  const [showOptions, setShowOptions] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [stickyPadding, setStickyPadding] = useState(false);
  const shouldRender = useAnimation(showOptions, 450);  

  const entranceAnimation = {'animation' : '0.5s ease 0s 1 normal none running fadeInDown'};

  const exitAnimation = {'animation' : '0.5s ease 0s 1 normal none running fadeOutUp' };

  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsActive(!isActive);
    setStickyPadding(!stickyPadding)
  }

  return (
    <div className={`sticky ${stickyPadding ? "remove-bottom" : null}`} >
      <div className="main-wrapper">
        <LogoCarousel/>
        <button onClick={handleClick} className={`menu-btn ${isActive ? "active" : null}`}><img src={menuLogo}/></button>
      </div>
      {shouldRender &&
      <div onClick={handleClick} style={showOptions ? entranceAnimation : exitAnimation} className={`options-wrapper animate__animated `}>
        <a className="link-to-section" href="#home">introduccion</a>
        <a className="link-to-section" href="#presentacion">Presentacion</a>
        <a className="link-to-section" href="#contacto">Contacto</a>
      </div> 
      }
    </div>
  )
}

export default NavbarMobile;