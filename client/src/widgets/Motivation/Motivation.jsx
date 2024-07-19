import React from "react";
import style from "./style.module.scss";
import TSymbold from "../../../public/icons/T-symbol.svg";
import Link from "next/link";

const Motivation = () => {
  return (
    <section className={style.motivation}>
      <div className="container">
        <div className={style.motivation__wrapper}>
          <div className={style.motivation__title}>
            <h2>
              СИС <span>Т</span> <TSymbold /> ема мотивации
            </h2>
          </div>

          <ul>
            <li>
              <h3>
                <span>1</span> Финансовые бонусы
              </h3>
              <p>
                Регулярные премии за достижение ключевых показателей
                эффективности (KPI) и успешное выполнение проектов.
              </p>
            </li>

            <li>
              <h3>
                <span>2</span> Карьерный рост
              </h3>
              <p>
                Возможности для профессионального развития, включая тренинги,
                курсы и программы повышения квалификации.
              </p>
            </li>

            <li>
              <h3>
                <span>3</span> ГИбкий график работы
              </h3>
              <p>
                Опции для удаленной работы и гибкого рабочего времени,
                способствующие лучшему балансу между работой и личной жизнью.
              </p>
            </li>

            <li>
              <h3>
                <span>4</span> Признание и награды
              </h3>
              <p>
                Ежемесячные и ежегодные награды за выдающиеся достижения, а
                также регулярные мероприятия для признания лучших сотрудников и
                команд.
              </p>
            </li>
          </ul>

          <div className={style.motivation__link}>
            <Link href="#tarifs">Посмотреть тарифы</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
