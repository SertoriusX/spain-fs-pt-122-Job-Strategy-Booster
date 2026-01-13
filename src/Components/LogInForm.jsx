import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";

export default function LogInForm() {
  const navigate = useNavigate();

  return (
    <div className="container1">
      <div className="log_in_page">
        <div className="registration_form1">
          <div className="header">
            <div className="logo"></div>
            <section className="details">
              <h1>Iniciar Sesión</h1>
              <p>Accede a tu cuenta para continuar</p>
            </section>
          </div>

          <div className="form_container">
            <form className="register">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />

              <p>
                Recordar <span>contraseña</span>
              </p>

              <input
                className="log_in_btn"
                type="submit"
                value="Iniciar sesión"
              />
            </form>

            <p>
              ¿Aún no tienes una cuenta?{" "}
              <span onClick={() => navigate("/register")}>Crear cuenta</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
