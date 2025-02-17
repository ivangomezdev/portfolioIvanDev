
import "./AboutMe.css";
import prueba from "./assets/arg.png"
import prueba2 from "./assets/edad.png"
import AboutMeCarousel from "./components/AboutMeCarousel";
const AboutMe = () => {


  return (
 <div className="aboutMe__gallery">
<div className="aboutMe__dataCurious" >
 
  <div className="aboutMe__infoCont" >
    <img src={prueba} alt="" />
    <div>
    <h4>País</h4>
    <p>Nacido en Argentina.</p>
    </div>

    
  </div>

  <div className="aboutMe__infoCont">
    <img src={prueba2} alt="" />
    <div>
    <h4>Mi edad actual</h4>
    <p>27 Años.</p>
    </div>
  </div>

  <div className="aboutMe__infoCont">
    <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1739486579/css-variables-svgrepo-com_s2kot9.svg" alt="" />
    <div>
    <h4>Habilidad destacada</h4>
    <p>Resiliencia</p>
    </div>
  </div>

  <div className="aboutMe__infoCont">
    <img src="https://res.cloudinary.com/dc5zbh38m/image/upload/v1739472314/react-svgrepo-com_kmtnn2.svg" alt="" />
    <div>
    <h4>Framework favorito</h4>
    <p>React</p>
    </div>
  </div>
  </div>
  <AboutMeCarousel/>
  
    </div>
  );
};

export default AboutMe;
