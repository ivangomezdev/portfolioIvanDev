import { Divider } from "@mui/material";
import "./ProjectPublication.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import HoverButton from "./ui/HoverButton";
import LinkIcon from "@mui/icons-material/Link";

import { projectsArr } from "../utils/ProjectsData";

const ProjectPublication = () => {
  const projectCards = projectsArr.map((i) => {
    return (
      <div className="projectPublication__card">
        <div className="projectPublication__fromCont">
          <img src={i.profilePic} alt="Profile" />
          <div className="projectPublication__fromText">
            <h4>
              {i.name}
              <VerifiedIcon color="primary" fontSize="small" />{" "}
            </h4>
            <p>{i.role}</p>
          </div>
          <div className="projectPublication__GIT">
            <HoverButton link={i.gitLink}/>
          </div>
        </div>
        <p className="projectPublication__projectComment">
          {i.projectDescription}
        </p>
        <div className="projectPublication__descriptionCont">
          <img src={i.projectImage} alt="Project Background" />
          <div style={{ padding: "6px", marginTop: "-20px" }}>
            <h4>{i.projectName}</h4>
            <a href={i.projectLink}>
              <LinkIcon fontSize="small" />
              Ver demo / proyecto
            </a>
          </div>
        </div>
        <p className="projectPublication__date">{i.date}</p>
        <Divider style={{ marginTop: "-10px" }} flexItem />

        <div className="projectPublication__chipsCont">
          {i.projectSkills.map((p) => {
            return (
              <div className="projectPublication__chip">
                <img style={{ width: "15px" }} src={p.icon} />
                <p>{p.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return <div className="projectPublication__container">{projectCards}</div>;
};

export default ProjectPublication;
