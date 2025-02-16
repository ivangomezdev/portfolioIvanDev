import { useRecoilValue } from "recoil";
import { paginationState } from "./utils/Atom";
import Sidebar from "./components/Sidebar";
import Presentation from "./components/Presentation";
import SocialButtons from "./components/SocialButtons";
import PaginationTabs from "./components/PaginationTabs";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { Divider } from "@mui/material";
import "./app.css";
import ProfileRotation from "./components/ProfileRotation";

export function App() {
  const pagination = useRecoilValue(paginationState); // Lee el valor del estado global

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <header className="header__content">
          <ProfileRotation />
          <Presentation />
          <SocialButtons />
          <Divider style={{ marginTop: "30px" }} flexItem />

          <PaginationTabs />
        </header>

        <main className="main__cont">
          <section>
            {pagination === 0 && <AboutMe key="about-me" />}
            {pagination === 1 && <Projects key="projects" />}
            {pagination === 2 && <Skills key="skills" />}
            {pagination === 3 && <Contact key="contact" />}
          </section>
        </main>
      </div>
    </div>
  );
}
