import { Link } from "react-router-dom";

import "../../styles/header.css";

function HeaderBar() {
  return (
    <header className="header">

      <div className="container header-container">

        <div className="logo">
          CAR - UNICH
        </div>

        <nav className="nav">

          <a href="#">Главная</a>

          <a href="#">Услуги</a>

          <a href="#">Авто</a>

          <a href="#">Мастера</a>

          <a href="#">Контакты</a>

        </nav>

        <div className="header-actions">

          <Link
            to="/login"
            className="login-button"
          >
            Войти
          </Link>

          <Link
            to="/register"
            className="register-button"
          >
            Регистрация
          </Link>

        </div>

      </div>

    </header>
  );
}

export default HeaderBar;