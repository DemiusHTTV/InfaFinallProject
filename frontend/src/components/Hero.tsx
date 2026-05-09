import "../../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <h1>
          АВТО ИЗ <span>ЯПОНИИ</span><br />
          <span>КОРЕИ И КИТАЯ</span><br />
          НА ЗАКАЗ
        </h1>

        <p>
          Подберём, привезём, растаможим и
          полностью обслужим ваш автомобиль.
        </p>

        <div className="hero-buttons">

          <button className="hero-primary">
            Рассчитать стоимость
          </button>

          <button className="hero-secondary">
            Онлайн запись
          </button>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;