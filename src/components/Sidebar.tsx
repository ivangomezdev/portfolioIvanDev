import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const Sidebar = () => {

  
  
  return (
    <>
    <div className="sidebar">

    <ul>
      <li>
      <a href="/">
        <HomeIcon />
        </a>
      </li>
      <li>
        <a href="/">
        <EmailIcon />
        </a>
      </li>
      <li>
      <a  href="https://drive.google.com/uc?export=download&id=1IUOg8xp1MnnF-0a0CNAhmSNG4wYqPiIf">
        <DownloadIcon />
        </a>
      </li>
      <li>
      <a  href="https://www.linkedin.com/in/ivangomezdeveloper/">
        <LinkedInIcon />
        </a>
      </li>
      <li>
      <a  href="https://github.com/ivangomezdev">
        <GitHubIcon />
        </a>
      </li>
    </ul>
  </div> 
  </>
  );
  
};

export default Sidebar;
