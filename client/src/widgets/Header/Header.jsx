import React from "react";
import style from "./style.module.scss";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <footer className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link href="/">
            <Logo />
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="#about">О нас</Link>
              </li>

              <li>
                <Link href="#tarifs">Тарифы</Link>
              </li>

              <li>
                <Link href="#our-projects">Наши проекты</Link>
              </li>
            </ul>
          </nav>

          <Link href="#contacts">Оставить заявку</Link>
        </div>
      </div>
    </footer>
  );
};

export default Header;
