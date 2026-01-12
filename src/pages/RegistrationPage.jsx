import { useState } from "react";
import "../styles/registration.css";
import LoginForm from "../Components/LogInForm";
import SignUpForm from "../Components/SignUp";

function Registration() {
  const [formType, setFormType] = useState("login");
  return (
    <div className="container">
      <div className="log_in_page">
        <div className="registration_form">
          <div className="header">
            <div className="logo"></div>
            <section className="details">
              <h1>Trackeando</h1>
              <p>Manten al dia tus candidaturas</p>
            </section>
          </div>

          {formType === "login" ? (
            <LoginForm changeForm={() => setFormType("signup")} />
          ) : (
            <SignUpForm changeForm={() => setFormType("login")} />
          )}
        </div>

        <div className="img"></div>
      </div>
    </div>
  );
}

export default Registration;
