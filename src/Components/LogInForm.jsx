import '../styles/registration.css'

function LoginForm({changeForm}) {
  return (
    <div className="form_container">
      <form className='login' action="">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" name="" id="" />
        <p>
          Recordar <span>contraseña</span>
        </p>
        <input className="log_in_btn" type="submit" value="Iniciar sesion" />
      </form>
      <p>
        ¿Aún no tienes una cuenta?<span onClick={changeForm}>Crear cuenta</span>
      </p>
    </div>
  );
}

export default LoginForm