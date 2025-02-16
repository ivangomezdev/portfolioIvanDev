
import "./Titles.css"

type titlesCont = {
    title:string
}
const Titles = (title:titlesCont) => {
  return (
<span className="titles__title"> {title.title} </span>
  )
}

export default Titles
