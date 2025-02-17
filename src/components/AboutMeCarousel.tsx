"use client"

import type React from "react"
import { useState } from "react"
import Card from "./AboutMeCard"
import "./CardCarousel.css"

const AboutMeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cards = [
    { id: 1, frontContent: "Sobre mí", backContent: "¡Hola! Soy Iván, un desarrollador Full Stack apasionado por crear experiencias digitales funcionales e intuitivas. Mi camino en el desarrollo comenzó en 2021 gracias a mi curiosidad por entender cómo funcionan las tecnologías que usamos a diario.", image: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739763792/yo_mxg3at.png" },
    { id: 2, frontContent: "Experiencía laboral", backContent: "Trabaje durante 6 meses como soporte IT donde realice configuración, mantenimiento y desarrollo de  2 aplicaciónes. Un chat interno de la empresa y una app para ver el estado de sus ventas que además aumento la productividad un 60%.", image: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739764615/busqueda_fwi1ph.jpg" },
    { id: 3, frontContent: "¿Por qué programación?", backContent: "Siempre me llamo la atención el por que de las cosas. Como una web, un juego o una simple app puede funcionar, a los 14 años monte una copia de mi juego favorito Habbo en un servidor Apache y descubrí que realmente era lo que me apasionaba.", image: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739763753/progamacion_ezbapg.jpg" },
    { id: 4, frontContent: "¿Por qué elegirme?", backContent: "Soy una persona comprometida con el equipo y la empresa, siempre estoy buscando hacer algo más,Aprendo rápido,soy responsable y me adapto a los cambios. Programo hace 4 años por lo qué si bien me queda mucho camino por recorrer me gustaria hacerlo junto a una empresa que crea en mí.", image: "https://res.cloudinary.com/dc5zbh38m/image/upload/v1739764704/habilidades-blandas_bfxdox.jpg" },
  ]

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <div className="carousel-container">
      <button onClick={prevCard} className="nav-button prev-button">
        &lt;
      </button>
      <div className="card-container">
        {cards.map((card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length
          return (
            <Card
              key={card.id}
              frontContent={card.frontContent}
              backContent={card.backContent}
              image={card.image}
              style={{
                transform: `
                  translateX(${offset === 0 ? 0 : offset === 1 ? 40 : -40}px)
                  rotate(${offset === 0 ? 0 : offset === 1 ? 5 : -5}deg)
                `,
                zIndex: offset === 0 ? 3 : 2,
              }}
            />
          )
        })}
      </div>
      <button onClick={nextCard} className="nav-button next-button">
        &gt;
      </button>
    </div>
  )
}

export default AboutMeCarousel