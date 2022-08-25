import "./presentation.css"

const Presentation = () => {
    return(
        <div className="presentation-wrapper" id="presentacion">
            <h1>Presentacion</h1>
            <iframe src="https://frsnutneduar-my.sharepoint.com/personal/jrivero_frsn_utn_edu_ar/_layouts/15/Doc.aspx?sourcedoc={0bc271ac-45df-42cb-a793-1f88c70e0ef1}&amp;action=embedview&amp;wdAr=1.7777777777777777"
                width="100%"
                height="205rem" 
                frameBorder="0">
            </iframe>
            <button className="download-btn">Descargar Presentacion</button>
        </div>
    )
}

export default Presentation;