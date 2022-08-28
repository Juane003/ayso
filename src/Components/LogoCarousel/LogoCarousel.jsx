import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import  MacLogo  from 'C:/Users/jemil/Desktop/projects/ayso/src/assets/Apple_logo_black.svg';
import linuxLogo from 'C:/Users/jemil/Desktop/projects/ayso/src/assets/Linux_Logo_in_Linux_Libertine_Font.svg';
import windowsLogo from 'C:/Users/jemil/Desktop/projects/ayso/src/assets/windows.svg';

const imageStyle = {
  'height' : '3rem',
  'width' : '3rem'
}

const LogoCarousel = () => {
  return (
    <Carousel
      width='3rem'
      autoPlay 
      transitionTime="500" 
      infiniteLoop 
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      >
      <img style={imageStyle} src={MacLogo} alt="macLogo"/>
      <img style={imageStyle} src={linuxLogo} alt="linuxLogo"/>
      <img style={imageStyle} src={windowsLogo} alt="windowsLogo"/>
    </Carousel>
  )
}

export default LogoCarousel;