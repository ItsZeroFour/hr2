import React from "react";
import style from "../Advantages/style.module.scss";
import ESymbol from "../../../public/icons/E-symbol.svg";
import Link from "next/link";

const Advantages = () => {
  return (
    <section className={style.advantages} id="our-projects">
      <div className="container">
        <div className={style.advantages__wrapper}>
          <div className={style.advantages__top}>
            <h2>
              <span>ДОВ</span> <ESymbol /> <span>РЬТЕ</span> НАМ ПОДБОР
              ЭФФЕКТИВНОЙ КОМАНДЫ
            </h2>

            <div className={style.advantages__top__text}>
              <p>
                Мы используем передовые методы для поиска квалифицированных
                специалистов, идеально подходящих под ваши требования. Наш опыт
                гарантирует быстрое и качественное закрытие вакансий.
              </p>

              <Link href="#projects">Наши проекты</Link>
            </div>
          </div>

          <ul>
            <li>
              <h3>Экспертиза и опыт</h3>
              <p>
                Наши специалисты обладают глубоким знанием рынка труда и
                многолетним опытом в подборе персонала, что позволяет нам
                находить самых квалифицированных кандидатов.
              </p>
            </li>

            <li>
              <h3>Современные технологии</h3>
              <p>
                Мы используем передовые технологии и методики для оценки
                кандидатов, что обеспечивает точность и эффективность процесса
                подбора.
              </p>
            </li>

            <li>
              <h3>Индивидуальный подход</h3>
              <p>
                Мы учитываем уникальные потребности и требования вашего бизнеса,
                предлагая персонализированные решения для каждой вакансии.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
