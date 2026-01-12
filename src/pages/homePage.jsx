import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/home.css";
import HomeStatisticsCard from "../Components/HomeStatisticsCard";
import Chart from "../Components/chartTable";

function HomePage() {
  return (
    <div className="home_display">
      <div className="header_bar">
        <FontAwesomeIcon className="notification_icon" icon={faBell} />

        <div className="user_data">
          <div className="user_personal_information">
            <h3>Nombre del usuario</h3>
            <p>correodelusuario@gmailcom</p>
          </div>

          <div className="user_picture"></div>
        </div>
      </div>

      <div className="home_body">
        <div className="left_side">
            <div className="statistics">
                <HomeStatisticsCard title={'Postulaciones'} quantity={10} date={'12/01/2026'}/>
                <HomeStatisticsCard title={'Entrevistas'} quantity={5} date={'12/01/2026'}/>
                <HomeStatisticsCard title={'Descartado'} quantity={0} date={'12/01/2026'}/>
            </div>

            <div className="chart_table">
              <h3>Vista general de las postulaciones</h3>
                <Chart/>
            </div>

            <div className="widgets"></div>
        </div>


        <div className="rigth_side"></div>
      </div>
    </div>
  );
}

export default HomePage;
