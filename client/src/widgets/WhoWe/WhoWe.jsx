import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

const WhoWe = () => {
  return (
    <section className={style.whowe} id="about">
      <div className="container">
        <div className={style.whowe__wrapper}>
          <h2>
            КТ <div /> МЫ ТАКИЕ
          </h2>
          <p>
            Мы помогаем вашему бизнесу находить лучших сотрудников. Используя
            новейшие технологии, обеспечиваем быстрый и эффективный подбор
            квалифицированных специалистов.
          </p>
          <Link href="#contacts">Связаться</Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
