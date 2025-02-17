
import type React from "react"
import { useState } from "react"
import "./AboutMeCard.css"

interface CardProps {
  frontContent: string
  backContent: string
  image: string
  style?: React.CSSProperties
}

const AboutMeCard: React.FC<CardProps> = ({ frontContent, backContent, image, style }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="card" style={style} onClick={handleClick}>
    <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>
      <div className="card-front">
        <img src={image || "/placeholder.svg"} alt={frontContent} className="card-image" />
        <div className="card-content">{frontContent}</div>
      </div>
      <div className="card-back">
        <div className="card-content">{backContent}</div>
      </div>
    </div>
  </div>
  )
}

export default AboutMeCard