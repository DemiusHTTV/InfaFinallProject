import { useState } from "react";
import { RequestModal } from "./popup";

function HeaderBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header-bar">
      <div className="header-bar_left">
        <div className="logo">CAR - UNICH</div>
      </div>

      <nav className="header-bar_nav">
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Как работаем</a>
        <a href="#">Каталог авто</a>
        <a href="#">Вопросы</a>
        <a href="#">Новости</a>
      </nav>

      <div className="header-bar_right">
        <button
          className="header-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Оставить заявку
        </button>
      </div>

      {isModalOpen && (
        <RequestModal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
}

export default HeaderBar;