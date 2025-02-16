import "./Contact.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Snackbar from "@mui/joy/Snackbar";
import { useState } from "preact/hooks";

const Contact = () => {
  const [isOpen,setIsOpen] = useState(false)
  const ContactData = [
    {
      icon: (
        <ForwardToInboxIcon
          style={{
            fontSize: "30px",
            color: "#41A4F5",
            backgroundColor: "rgba(128, 128, 128, 0.162)",
            padding: "5px",
            borderRadius: "10px",
          }}
        />
      ),
      title: "Email",
      text: "ivansangomez6@gmail.com",
    },
    {
      icon: (
        <PhoneIphoneIcon
          style={{
            fontSize: "30px",
            color: "#41A4F5",
            backgroundColor: "rgba(128, 128, 128, 0.162)",
            padding: "5px",
            borderRadius: "10px",
          }}
        />
      ),
      title: "Teléfono",
      text: "(+54) 2616512211 (AR)",
    },
    {
      icon: (
        <LinkedInIcon
          style={{
            fontSize: "30px",
            color: "#41A4F5",
            backgroundColor: "rgba(128, 128, 128, 0.162)",
            padding: "5px",
            borderRadius: "10px",
          }}
        />
      ),
      title: "Linkedin",
      text: "www.linkedin.com/in/ivangomezdeveloper/",
    },
    {
      icon: (
        <InstagramIcon
          style={{
            fontSize: "30px",
            color: "#41A4F5",
            backgroundColor: "rgba(128, 128, 128, 0.162)",
            padding: "5px",
            borderRadius: "10px",
          }}
        />
      ),
      title: "Instagram",
      text: "www.instagram.com/ivansantiagoll/",
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsOpen(true)// Puedes cambiar esto por un tooltip o mensaje visual
      })
      .catch((err) => console.error("Error al copiar:", err));
  };

  return (
    <div className="Contact__cards">
      {ContactData.map((i, index) => {
        return (
          <div onClick={() => handleCopy(i.text)} key={index} className="Contact__card">
            {i.icon}
            <div className="Contact__card__text">
              <p className="Contact__card__tip">{i.title} </p>
              <p className="Contact__card__second-text">{i.text}</p>
            </div>
          </div>
        );
      })}
       <Snackbar
       open={isOpen}
        variant="soft"
        color="success"
        autoHideDuration={3000}
        onClose={() => setIsOpen(false)}>
          Copiado al portapapeles! Espero tú contacto 🧾
          </Snackbar>
     
      
    </div>
  );
};

export default Contact;
