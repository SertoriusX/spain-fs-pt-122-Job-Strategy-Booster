import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarButton({ icon, label }) {
  return (
    <button className="nav_bar_button">
      <FontAwesomeIcon className="icon" icon={icon} />
      <span>{label}</span>
    </button>
  );
}
export default NavBarButton