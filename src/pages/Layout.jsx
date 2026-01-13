import NavBarButton from "../Components/NavBarButton";
import "../styles/layout.css";

import {
  faHouse,
  faClipboardList,
  faBookBookmark,
  faHandshake,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import HomePage from "./homePage";

function Layout() {
  return (
    <div className="layout">
      <div className="side_bar">
        <div className="header">
          <div className="logo"></div>
          <h3>
            Job <br />
            Booster
          </h3>
        </div>

        <div className="nav_bar">
          <h3>Menu</h3>
          <div className="nav_bar_buttons">
            <NavBarButton icon={faHouse} label="Home" />
            <NavBarButton icon={faClipboardList} label="Postulaciones" />
            <NavBarButton icon={faBookBookmark} label="Curriculums" />
            <NavBarButton icon={faHandshake} label="Entrevista" />
          </div>
        </div>

        <div className="general">
          <h3>General</h3>
          <div className="tools_buttons">
            <NavBarButton icon={faGear} label={"Ajustes"} />
            <NavBarButton icon={faCircleQuestion} label={"Ayuda"} />
            <NavBarButton icon={faRightFromBracket} label={"Salir"} />
          </div>
        </div>
      </div>

      {/* PUNTO DE ENTRADA SEGUN EL CONTEDIDO DE LA WEB */}
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default Layout;
