import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/joy/IconButton';
import DownloadButton from './DownloadButtont';
import "./SocialButtons.css"

const SocialButtons = () => {
  return (
    <div className="socialButtons__cont">
        <DownloadButton/>
        <div className="socialButtons__buttons">
        <a style={{textDecoration:"none"}} href={"https://www.linkedin.com/in/ivangomezdeveloper/"}>
          <IconButton  variant="solid">
          <LinkedInIcon />
        </IconButton>
        </a>
        <a style={{textDecoration:"none"}} href={"https://github.com/ivangomezdev"}>
        <IconButton variant="solid">
        
          <GitHubIcon />
        </IconButton>
          </a>
        </div>
    </div>
  )
}

export default SocialButtons
