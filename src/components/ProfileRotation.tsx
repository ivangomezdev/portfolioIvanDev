import profilePic from "../assets/perfil.png";
import profilePic2 from "../assets/profile2.png";
import { useState, useEffect } from "react";
import "./ProfileRotation.css";
const ProfileRotation = () => {
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAvatar((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="avatar-container">
      <div className={`image-wrapper  ${showAvatar ? "rotate" : ""}`}>
        {/* Imagen frontal */}
        <img
          className="avatar front"
          src={profilePic}
          alt="Avatar"
        />
        {/* Imagen trasera */}
        <img
          className="avatar back"
          src={profilePic2}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default ProfileRotation;
