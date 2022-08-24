import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import macLogo from 'C:/Users/54336/Desktop/projects/personal-projects/ayso-tp-2/src/assets/Apple_logo_black.svg';
import linuxLogo from 'C:/Users/54336/Desktop/projects/personal-projects/ayso-tp-2/src/assets/Linux_Logo_in_Linux_Libertine_Font.svg';
import windowsLogo from 'C:/Users/54336/Desktop/projects/personal-projects/ayso-tp-2/src/assets/windows.svg';

const imageStyle = {
  'height' : '3rem',
  'width' : '3rem'
}

const LogoCarousel = () => {
  return (
    <Carousel
      zIndex="1"
      width='3rem'
      autoPlay 
      transitionTime="500" 
      infiniteLoop 
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      >
      <img style={imageStyle} src={macLogo} alt="appleLogo"/>
      <img style={imageStyle} src={linuxLogo} alt="linuxLogo"/>
      <img style={imageStyle} src={windowsLogo} alt="windowsLogo"/>
    </Carousel>
  )
}

export default LogoCarousel;