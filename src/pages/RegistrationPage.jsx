import React from 'react'
import { useState } from "react";
import "../styles/registration.css";
import SignUpForm from "../Components/SignUpForm";
export default function RegistrationPage() {
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
          <SignUpForm/>
        </div>

        <div className="img"></div>
      </div>
    </div>
  )
}











