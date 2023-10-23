import "./Home.css";
import logo from "./../images/logo.svg";
import icon1 from "./../images/icon1.png";
import icon2 from "./../images/icon2.png";
import icon3 from "./../images/icon3.png";
import icon4 from "./../images/icon4.png";

const Home = () => {
  function NonClickableLink() {
    const handleClick = (e) => {
      e.preventDefault(); // Предотвращение действия по умолчанию (переход по ссылке)
    };
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <img className="header__logo" src={logo} alt="Лого" />
            <ul className="header__icons">
              <li className="header__icon">
                <img className="header__icon-img" src={icon1} alt="" />
              </li>
              <li className="header__icon">
                <img className="header__icon-img" src={icon2} alt="" />
              </li>
              <li className="header__icon">
                <img className="header__icon-img" src={icon3} alt="" />
              </li>
              <li className="header__icon">
                <img className="header__icon-img" src={icon4} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <nav className="nav">
        <div className="container">
          <div className="nav__inner">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  Все курсы
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  Расписание занятий
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  Новости университета
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  Нормативные документы
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  О нас
                </a>
              </li>
              <li className="nav__list-item">
                <a
                  className="nav__list-item-link"
                  href="#"
                  onClick={NonClickableLink}
                >
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main">
        <div className="container">
          <div className="main__inner">
            <div className="main__inner-content">
              <img className="main__inner-logo" src={logo} alt="" />
              <h2 className="main__inner-content-title">
                Дружный коллектив - залог успеха
              </h2>
              <p className="main__inner-content-text">
                Прививаем нашим студентам культуру корпоративного общения
              </p>
              <a className="btn" href="#" onClick={NonClickableLink}>
                УЧИТЬСЯ
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
