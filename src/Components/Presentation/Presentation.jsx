import { Carousel } from "react-responsive-carousel";
import { Diapositiva1, Diapositiva2, Diapositiva3, Diapositiva4, Diapositiva5, Diapositiva6, Diapositiva7, Diapositiva8, Diapositiva9, Diapositiva10 } from "../../assets/slides";
import "./presentation.css";

const Presentation = () => {
    return(
        <div className="presentation-wrapper" id="presentacion">
            <h1>Presentacion</h1>
            <Carousel
                className="slide-carousel"
                autoPlay 
                transitionTime="500" 
                infiniteLoop 
                //showArrows={false}
                showIndicators={false}
                //showStatus={false}
                showThumbs={false}
            >
                <img src={Diapositiva1} className="slide-img"/>
                <img src={Diapositiva2} className="slide-img"/>
                <img src={Diapositiva3} className="slide-img"/>
                <img src={Diapositiva4} className="slide-img"/>
                <img src={Diapositiva5} className="slide-img"/>
                <img src={Diapositiva6} className="slide-img"/>
                <img src={Diapositiva7} className="slide-img"/>
                <img src={Diapositiva8} className="slide-img"/>
                <img src={Diapositiva9} className="slide-img"/>
                <img src={Diapositiva10} className="slide-img"/>
            </Carousel>
            <a href="https://frsnutneduar-my.sharepoint.com/:p:/g/personal//jrivero_frsn_utn_edu_ar/EaxxwgvfRctCp5MfiMcODvEBFcTo4SXF_-RqoPqy09ncDA?e=Isz3vK" target="_blank" className="download-btn">Abrir Presentacion</a>
        </div>
    )
}

export default Presentation;