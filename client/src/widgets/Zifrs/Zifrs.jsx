import React from "react";
import style from "./style.module.scss";

const Zifrs = () => {
  return (
    <section className={style.zifrs}>
      <div className="container">
        <div className={style.zifrs__wrapper}>
          <ul>
            <li>
              <h3>1200+</h3>
              <p>трудоустроенных кандидатов</p>
            </li>

            <li>
              <h3>150+</h3>
              <p>клиентов-компаний</p>
            </li>

            <li>
              <h3>240+</h3>
              <p>закрытых вакансий</p>
            </li>

            <li>
              <h3>3</h3>
              <p>филиала</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Zifrs;
