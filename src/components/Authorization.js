import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируйте useNavigate
import logo from "./../images/logo.svg";
import "../style/style.css";
import axios from "axios";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Используйте useNavigate для перехода

  const registerUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/registration",
        {
          email,
          password,
        }
      );

      setIsAuthenticated(true);
      alert("Пользователь успешно зарегистрирован");

      // Перенаправьте пользователя на страницу Home
      navigate("/home");
    } catch (error) {
      alert("Что-то пошло не так");
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <img className="header__img" src={logo} alt="svg" />
        </div>
      </header>
      <section className="auth">
        <div className="container">
          <h1 className="auth__title">АВТОРИЗАЦИЯ</h1>
          <div className="form__group">
            <input
              type="text"
              placeholder="Логин (e-mail)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form__group">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth__btns">
            <p className="auth__btns-text auth__btns-text-1">
              <button onClick={registerUser} className="auth__login-button">
                ВОЙТИ
              </button>
            </p>
            <p className="auth__btns-text auth__btns-text-2">
              <button
                onClick={() => registerUser(email, password)}
                className="registration-button"
              >
                РЕГИСТРАЦИЯ
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authorization;
