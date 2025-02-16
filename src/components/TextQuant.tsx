import "./TextQuant.css"

type QuantItems = {
  numberText: string;
  text: string;
};


const TextQuant = ({ numberText, text }: QuantItems) => {
  return (
    <div className="textQuant__content">
      <span>{numberText}</span>
      <p>{text}</p>
    </div>
  );
};

export default TextQuant;
