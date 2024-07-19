import React from "react";
import style from "./style.module.scss";
import Check from "../../../public/icons/check.svg";
import Cross from "../../../public/icons/cross.svg";

const Tarifs = () => {
  return (
    <section className={style.tarifs} id="tarifs">
      <div className="container">
        <div className={style.tarifs__wrapper}>
          <h2>
            <span>Наши</span> тарифы
          </h2>

          <table>
            <tr>
              <th>Basic</th>
              <th>Pro</th>
            </tr>

            <tr>
              <td>
                <div>
                  <p>Рекрутинг</p>
                  <Check />
                </div>
              </td>

              <td>
                <div>
                  <p>Рекрутинг</p>
                  <Check />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <p>Создание / оптимизация орг. структуры</p>
                  <Cross />
                </div>
              </td>

              <td>
                <div>
                  <p>Создание / оптимизация орг. структуры</p>
                  <Check />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <p>Cоздание системы мотивации</p>
                  <Cross />
                </div>
              </td>

              <td>
                <div>
                  <p>Cоздание системы мотивации</p>
                  <Check />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <p>Внедрение системы адаптации</p>
                  <Cross />
                </div>
              </td>

              <td>
                <div>
                  <p>Внедрение системы адаптации</p>
                  <Check />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  <p>Тестирование</p>
                  <Check />
                </div>
              </td>

              <td>
                <div>
                  <p>Тестирование</p>
                  <Check />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
