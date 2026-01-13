import { useNavigate } from "react-router-dom";
import "../styles/Registration.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/user/UserContext";
import { BaseUrl } from "../api/BaseUrl";
import axios from "axios";

export default function LogInForm() {
  const navigate = useNavigate();
  const { saveToken } = useContext(UserContext);

  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(null);
    setSuccess(null);
  };

  const sendSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/login`, form, {
        headers: { "Content-Type": "application/json" }
      });

      setForm({ username: "", password: "" });
      setSuccess(response.data.message || "Login successful");
      saveToken(response.data.access_token);
      navigate('/home')
      
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || err.message || "Something went wrong. Please try again.");
      setSuccess(null);
    }
  };

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
            <form className="register" onSubmit={sendSubmit}>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
              />

              <p>
                Recordar <span>contraseña</span>
              </p>

              <input
                className="log_in_btn"
                type="submit"
                value="Iniciar sesión"
              />

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{success}</span>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
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
