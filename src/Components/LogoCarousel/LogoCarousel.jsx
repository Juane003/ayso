import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { appleLogo, linuxLogo, windowsLogo } from "@/assets/logos";

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
      <img style={imageStyle} src={appleLogo} alt="macLogo"/>
      <img style={imageStyle} src={linuxLogo} alt="linuxLogo"/>
      <img style={imageStyle} src={windowsLogo} alt="windowsLogo"/>
    </Carousel>
  )
}

export default LogoCarousel;