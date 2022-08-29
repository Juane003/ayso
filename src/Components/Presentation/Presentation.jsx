import { Carousel } from "react-responsive-carousel";
import { Diapositiva1, Diapositiva2, Diapositiva3, Diapositiva4, Diapositiva5, Diapositiva6, Diapositiva7, Diapositiva8, Diapositiva9, Diapositiva10, Diapositiva11, Diapositiva12, Diapositiva13, Diapositiva14, Diapositiva15, Diapositiva16, Diapositiva17 } from "../../assets/slides";
import "./presentation.css";

const Presentation = () => {
    return(
        <div className="presentation-wrapper" id="presentacion">
            <h1>Presentación</h1>
            <Carousel
                className="slide-carousel"
                autoPlay 
                transitionTime="500" 
                infiniteLoop 
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
            >
                <img src={Diapositiva1} className="slide-img"/>
                <img src={Diapositiva2} className="slide-img"/>
                <img src={Diapositiva3} className="slide-img"/>
                <img src={Diapositiva4} className="slide-img"/>
                <img src={Diapositiva17} className="slide-img"/>
                <img src={Diapositiva5} className="slide-img"/>
                <img src={Diapositiva6} className="slide-img"/>
                <img src={Diapositiva7} className="slide-img"/>
                <img src={Diapositiva8} className="slide-img"/>
                <img src={Diapositiva9} className="slide-img"/>
                <img src={Diapositiva10} className="slide-img"/>
                <img src={Diapositiva11} className="slide-img"/>
                <img src={Diapositiva12} className="slide-img"/>
                <img src={Diapositiva13} className="slide-img"/>
                <img src={Diapositiva14} className="slide-img"/>
                <img src={Diapositiva15} className="slide-img"/>
                <img src={Diapositiva16} className="slide-img"/>

            </Carousel>
            <a href="https://frsnutneduar-my.sharepoint.com/:p:/g/personal/jrivero_frsn_utn_edu_ar/EVBkuvOlpipCmXNJ9kxJ9OYBZysxXG5jIbLmaS2PNs_C-A?e=aAsci8" className="download-btn" target="_blank">Abrir Presentacion</a>
        </div>
    )
}

export default Presentation;