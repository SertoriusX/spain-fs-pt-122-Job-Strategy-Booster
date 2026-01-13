
import { useState } from "react";
import NavBarButton from "../Components/NavBarButton";
import "../styles/Layout.css";
import React from "react";


import {
  faHouse,
  faClipboardList,
  faBookBookmark,
  faHandshake,
  faGear,
  faCircleQuestion,

  faRightFromBracket ,
  faUserPlus, faRightToBracket,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

function Layout() {
  const [openPost, setOpenPost] = useState(false);


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

          <NavBarButton icon={faHouse} label="Home" to="home" />

            <div onClick={() => setOpenPost(!openPost)}>
              <NavBarButton icon={faClipboardList} label="Postulaciones" to="postulaciones" />
            </div>

            {openPost && (
              <div className="dropdown">
                <NavBarButton icon={faLinkedin} label="LinkedIn" to="linkendin"/>
                <NavBarButton icon={faBriefcase} label="Indeed" to="indead" />

              </div>
            )}

            <NavBarButton icon={faBookBookmark} label="Curriculums" to="curriculums" />

            <NavBarButton icon={faHandshake} label="Entrevista" />
          </div>
        </div>

        <div className="general">
          <h3>General</h3>
          <div className="tools_buttons">

            <NavBarButton icon={faGear} label="Ajustes" />
            <NavBarButton icon={faCircleQuestion} label="Ayuda" />
            <NavBarButton icon={faRightFromBracket} label="Salir" />
            <NavBarButton icon={faUserPlus} label="Register" to="register" />
            <NavBarButton icon={faRightToBracket} label="Login" to="login"/>

             

          </div>
        </div>
      </div>


      <div className="content ">
        <Outlet/>

      </div>
    </div>
  );
}

export default Layout;
