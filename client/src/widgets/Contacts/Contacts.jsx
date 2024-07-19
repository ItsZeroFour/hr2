"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import axios from "../../utils/axios";

const Contacts = () => {
  const [email, setEmail] = useState("");

  const sendMail = async (event) => {
    event.preventDefault();

    try {
      if (!email) {
        return alert("Ошибка! Заполните все поля");
      }

      const data = await axios.post("/email/sendMail", {
        email,
      });

      if (!data) {
        return alert("Не удалось отправить сообщение, повторите попытку позже");
      }

      return alert("Сообщение успешно отправлено!");
    } catch (err) {
      console.log(err);
      alert("Не удалось отправить сообщение, повторите попытку позже");
    }
  };

  return (
    <section className={style.contacts} id="contacts">
      <div className="container">
        <div className={style.contacts__wrapper}>
          <h2>
            Найти нас легко <br />
            <span>
              прост <div />
            </span>
            <span>обратитесь к нам</span>
          </h2>

          <form>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <button type="submit" onClick={sendMail}>
              Отпраивть
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
