import { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function DownloadButton() {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
   const cvDonwloadUrl = "https://drive.google.com/uc?export=download&id=1IUOg8xp1MnnF-0a0CNAhmSNG4wYqPiIf" 
   window.location.href = cvDonwloadUrl;   
    setTimeout(() => {
      setDownloading(false);
    }, 3000); // Simula la descarga por 3 segundos
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: "30px",
        backgroundColor: downloading ? "#41A4F5" : "white",
        padding: "20px 10px",
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
        border: "3px solid #41A4F5",
        cursor: "pointer",
        transition: "background-color 0.3s",
        width: "200px",
        height: "20px",
        fontSize: "15px"
      }}
    >
      <motion.span
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: downloading ? 0 : 1, x: downloading ? -20 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ color: downloading ? "white" : "black", position: "relative",left:"15px"}}
      >
       Descargar CV
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: downloading ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ color: "white", position: "absolute" }}
      >
        Descargando...
      </motion.span>
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: downloading ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "relative",
          right: "-11px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#41A4F5",
        }}
      >
        <Download style={{ width: "20px", height: "20px", color: "white" }} />
      </motion.span>
    </button>
  );
}
