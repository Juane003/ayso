import "./home.css";

const Home = () => {
    return (
        <div className="home-wrapper" id="home">
            <h1 className="title">Introduccion</h1>
                <p className="text">
                    El desarrollo de los sistemas operativos ha supuesto un gran desafío a lo largo de los años debido a la complejidad de las tareas y las problemáticas que éstos deben afrontar y resolver.<br></br> <br></br>
                    En el siguiente trabajo, no abocaremos a tratar los cinco principales avances teóricos que se han dado en la esfera del desarrollo de sistemas operativos, lo cual nos permitirá entender un poco mejor el papel que éstos cumplen. <br></br><br></br>
                    Cada uno de los avances antes referidos se caracteriza por principios que se han desarrollado para la resolución de problemáticas práctica. Estos avances, que representan los aspectos claves de diseño e implementación de los sistemas operativos modernos, son los siguientes: 
                </p>
                <ul>
                        <li>Procesos</li>
                        <li>Gestión de memoria</li>
                        <li>Protección y seguridad de la información</li>
                        <li>Planificación y gestión de los recursos</li>
                        <li>Estructura del sistema</li>
                    </ul>
        </div>
    )
}

export default Home;