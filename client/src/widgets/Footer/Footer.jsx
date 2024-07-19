import React from "react";
import style from "./style.module.scss";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <header className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__left}>
            <Logo />
            <p>
              Мы — эксперты в подборе и управлении персоналом, стремящиеся к
              вашему успеху. Наша компания предлагает эффективные решения для
              развития вашего бизнеса через качественный подбор сотрудников.
            </p>
          </div>

          <div className={style.footer__center}>
            <nav>
              <ul>
                <li>
                  <Link href="#about">О нас</Link>
                </li>

                <li>
                  <Link href="#tarifs">Тарифы</Link>
                </li>

                <li>
                  <Link href="#projects">Наши проекты</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className={style.footer__right}>
            <Link href="mailto:job.master@internet.ru">
              job.master@internet.ru
            </Link>
            <Link href="tel:+79182461290">+7 (918) 246-12-90</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
