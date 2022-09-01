import { LogoCarousel } from "../LogoCarousel";
import "./navBarDesktop.css";

const NavBarDesktop = () => {
  return (
    <div className="sticky" >
    <div className="main-wrapper">
      <LogoCarousel/>
      <div className="options-wrapper-2">
        <a className="link-to-section-2" href="#home">Introducción</a>
        <a className="link-to-section-2" href="#presentacion">Presentación</a>
        <a className="link-to-section-2" href="#contacto">Contacto</a>
      </div>
    </div> 
  </div>
  )
}

export default NavBarDesktop;