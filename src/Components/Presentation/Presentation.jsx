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
            <a href="https://frsnutneduar-my.sharepoint.com/:p:/r/personal/jrivero_frsn_utn_edu_ar/_layouts/15/Doc.aspx?sourcedoc=%7BFA21FF19-02F4-4215-99B8-99BEE1EEA15A%7D&file=INTRODUCCION%20A%20LOS%20S.O.%20(5)%20-%20Copia.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&login_hint=jrivero%40frsn.utn.edu.ar&ct=1661789522292&wdOrigin=OFFICECOM-WEB.START.EDGEWORTH&cid=e780aee6-343e-48d9-b117-351f1c9f92d4" target="_blank" className="download-btn">Abrir Presentacion</a>
        </div>
    )
}

export default Presentation;