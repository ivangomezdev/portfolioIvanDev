import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HailIcon from "@mui/icons-material/Hail";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "./PaginationTabs.css";
import { useRecoilState } from "recoil";
import { paginationState } from "../utils/Atom";

//utilizado para navegar entre sections
const PaginationTabs = () => {
  // Usa el estado global para controlar la pestaña seleccionada
  const [value, setValue] = useRecoilState(paginationState);

  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue); // Actualiza el estado global
    console.log(newValue); // Verifica el valor en la consola
  };

  return (
    <div className="paginationTabs__content">
      <Tabs
       className="paginationTabs__contentBig"
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        variant="scrollable"  // Permite scroll horizontal en pantallas pequeñas
        scrollButtons="auto" // Muestra botones de scroll solo si es necesario
      >
        {/* About Me: Valor 0 */}
        <Tab
          icon={<HailIcon />}
          iconPosition="start"
          label="SOBRE MÍ"
          value={0}
          
        />
        {/* Projects: Valor 1 */}
        <Tab
          icon={<AccountTreeIcon />}
          iconPosition="start"
          label="PROYECTOS"
          value={1}
        />
        {/* Skills: Valor 2 */}
        <Tab
          icon={<CodeIcon />}
          iconPosition="start"
          label="SKILLS"
          value={2}
        />
        {/* Contact: Valor 3 */}
        <Tab
          icon={<ConnectWithoutContactIcon />}
          iconPosition="start"
          label="CONTACTO"
          value={3}
        />
      </Tabs>

      {/*  Mobile  */}

      <Tabs
       className="paginationTabs__contentMobile"
       value={value}
       onChange={handleChange}
       aria-label="icon position tabs example"
       variant="scrollable"  // Permite scroll horizontal en pantallas pequeñas
       scrollButtons="auto" // Muestra botones de scroll solo si es necesario
       >
        {/* About Me: Valor 0 */}
        <Tab
          icon={<HailIcon />}
          iconPosition="start"
          
          value={0}
          
        />
        {/* Projects: Valor 1 */}
        <Tab
          icon={<AccountTreeIcon />}
          iconPosition="start"
          
          value={1}
        />
        {/* Skills: Valor 2 */}
        <Tab
          icon={<CodeIcon />}
          iconPosition="start"
          
          value={2}
        />
        {/* Contact: Valor 3 */}
        <Tab
          icon={<ConnectWithoutContactIcon />}
          iconPosition="start"
          
          value={3}
        />
      </Tabs>
    </div>
  );
};

export default PaginationTabs;
