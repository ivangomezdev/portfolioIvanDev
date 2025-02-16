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
          <IconButton  variant="solid">
          <LinkedInIcon />
        </IconButton>
        <IconButton variant="solid">
          <GitHubIcon />
        </IconButton>
        </div>
    </div>
  )
}

export default SocialButtons
