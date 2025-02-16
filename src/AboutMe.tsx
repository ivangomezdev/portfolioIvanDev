import "./AboutMe.css";
import zero from "./assets/projects/zero.png";
import one from "./assets/projects/one.png";
import two from "./assets/projects/two.png";
import three from "./assets/projects/three.png";
import four from "./assets/projects/four.png";
import eigth from "./assets/projects/eigth.png";

const AboutMe = () => {
  const cardsData = [
    {
      img: zero,
      backImg: eigth,
      description:
        "Desarrollador Fullstack, 27 años, nacido en Argentina,Buenos Aires. Me apasiona viajar y conocer nuevos lugares.Me apasiona el aprendizaje continuo y la productividad, por lo que siempre estoy involucrado en nuevos proyectos y desafíos.",
    },
    { img: eigth, backImg: eigth, description: "" },
    { img: one, backImg: eigth, description: "Compromiso, creatividad y eficiencia. Me apasiona desarrollar soluciones escalables, escribir código limpio y enfrentar nuevos desafíos con determinación. Además, soy una persona que aprende rápidamente, por lo que puedo acoplarme a nuevas tecnologías." },
    { img: eigth, backImg: eigth, description: "" },
    { img: two, backImg: eigth, description: "Desde pequeño me llamo la atención el trasfondo de las cosas, sobre todo las aplicaciones.A los 14 años monte una copia de mi juego favorito Habbo con un servidor de Apache, Al ver que funcionaba descurbrí que esto era para mí." },
    { img: eigth, backImg: eigth, description: "" },
    { img: three, backImg: eigth, description: "Trabajé en DAMATEC, en el área de Soporte IT. Desarrollé dos aplicaciones dentro de la empresa, logrando aumentar la productividad en un 60%. Hoy en día, esas aplicaciones siguen en uso." },
    { img: eigth, backImg: eigth, description: "" },
    { img: four, backImg: eigth, description: "En 2022 Inicié en CoderHouse como FrontEnd React finalizando mis estudios en 2023.Al finalizar Sentí que necesitaba adquirir mas conocimientos para mi primer empleo por lo que me inscribí en APX como desarrollador FullStack." },
  ];

  return (
    <div className="aboutMe__gallery">
      {cardsData.map((i, index) => (
        <div key={index} className="card">
          <div className="card__inner">
            <div className="card__front">
              <img src={i.img} alt="Front" />
            </div>
            <div className="card__back">
              <div>
                <h4>{i.description}</h4>
                <img src={i.backImg} alt="Back" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
