import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../api/BaseUrl';
export default function SignUpForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    ConfirmPassword: ""
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setError(null)
    setSuccess(null)
  }
  const sendSubmit = async (e) => {
    if (form.ConfirmPassword !== form.password) {
      setError("Password donst mathch")
    }
    e.preventDefault()
    try {
      const response = await axios.post(`${BaseUrl}/register`, form, {
        headers: { 'Content-Type': 'application/json' }
      });
      setForm({ username: "", email: "", password: "", ConfirmPassword: "" });
      setSuccess(response.data.message);
    }
    catch (err) {
      setError(err.response.data.message);

    }
  }



  const navigate = useNavigate()
  return (
    <div className="form_container">
      <form className="register" action="" onSubmit={sendSubmit}>
        <input type="text" name='username' value={form.username} onChange={handleChange} placeholder="Username" />
        <input type="text" name='email' value={form.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name='password' value={form.password} onChange={handleChange} placeholder="Password" />
        <input type="password" name="ConfirmPassword" value={form.ConfirmPassword} onChange={handleChange} placeholder="Confirm Password" />

        <input className="create_account" type="submit" value="Registrarme" />
      </form>
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
      <button className="singup_btn">Iniciar con <FontAwesomeIcon icon={faGoogle} /></button>
      <p>Ya tienes una cuenta <span onClick={() => navigate('/login')}>Accede a tu cuenta</span></p>

    </div>
  )
}





