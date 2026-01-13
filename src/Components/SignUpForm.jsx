import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const navigate =useNavigate()
  return (
    <div className="form_container">
      <form className="register" action="">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" name="" id="" />
        <input className="create_account" type="submit" value="Registrarme" />
      </form>
      <button className="singup_btn">Iniciar con <FontAwesomeIcon icon={faGoogle} /></button>
      <p>Ya tienes una cuenta <span onClick={()=>navigate('/login')}>Accede a tu cuenta</span></p>
    </div>
  )
}





