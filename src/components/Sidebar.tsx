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
        <HomeIcon />
      </li>
      <li>
        <EmailIcon />
      </li>
      <li>
        <DownloadIcon />
      </li>
      <li>
        <LinkedInIcon />
      </li>
      <li>
        <GitHubIcon />
      </li>
    </ul>
  </div> 
  </>
  );
  
};

export default Sidebar;
