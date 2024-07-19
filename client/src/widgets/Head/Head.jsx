import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import client1 from "../../../public/images/clients/client-1.png";
import client2 from "../../../public/images/clients/client-2.png";
import client3 from "../../../public/images/clients/client-3.png";
import client4 from "../../../public/images/clients/client-4.png";
import client5 from "../../../public/images/clients/client-5.png";
import headImg from "../../../public/images/head-img.png";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>
            Подбор персонала, <span>который работает</span> на ваш успех
          </h1>

          <div className={style.head__content}>
            <div className={style.head__clients}>
              <ul>
                <li>
                  <Image src={client1} alt="client 1" />
                </li>

                <li>
                  <Image src={client2} alt="client 2" />
                </li>

                <li>
                  <Image src={client3} alt="client 3" />
                </li>

                <li>
                  <Image src={client4} alt="client 4" />
                </li>

                <li>
                  <Image src={client5} alt="client 5" />
                </li>
              </ul>

              <div className={style.head__clients__text}>
                <h4>143+</h4>
                <p>Работодателей домеряют нам</p>
              </div>
            </div>

            <p>
              Мы предлагаем профессиональный подбор персонала, помогая найти
              лучших сотрудников для вашего бизнеса. Используем новейшие методы
              и технологии для быстрого и эффективного поиска. Доверьтесь нашему
              опыту, чтобы повысить продуктивность и успех вашей компании.
            </p>
          </div>

          <Image src={headImg} alt="head" />
        </div>
      </div>
    </section>
  );
};

export default Head;
