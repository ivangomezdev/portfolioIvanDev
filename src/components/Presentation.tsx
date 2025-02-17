
import "./Presentation.css";
import TextQuant from "./TextQuant";

const Presentation = () => {
  return (
    <div className="presentation__content">


        <div className="presentation__profileText">
          <h2>Iván Gómez</h2>
          <h6>Desarrollador de software</h6>
        <div className="presentation__textQuant">
        <TextQuant numberText="1" text="Año de experiencia" />
        <TextQuant numberText="+10" text="Proyectos finalizados" />
        <TextQuant numberText="+4" text="Años programando" />
        
        </div>
        </div>
      </div>

  );
};

export default Presentation;
