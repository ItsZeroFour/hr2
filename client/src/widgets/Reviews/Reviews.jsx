"use client";

import React, { useRef } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import client1 from "../../../public/images/clients/client-1.png";
import client2 from "../../../public/images/clients/client-2.png";
import client3 from "../../../public/images/clients/client-3.png";
import client4 from "../../../public/images/clients/client-4.png";
import client5 from "../../../public/images/clients/client-5.png";
import ChevronLeft from "../../../public/icons/chevron-left.svg";
import ChevronRight from "../../../public/icons/chevron-right.svg";

const Reviews = () => {
  const sliderNavigationLeft = useRef(null);
  const sliderNavigationRight = useRef(null);

  return (
    <section className={style.reviews}>
      <div className="container">
        <div className={style.reviews__wrapper}>
          <Swiper
            navigation={{
              prevEl: ".sliderLeft",
              nextEl: ".sliderRight",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <p>
                Я очень благодарен компании за профессиональный подход к подбору
                персонала. Они быстро нашли для нас идеального кандидата,
                который не только отлично вписался в нашу команду, но и
                значительно улучшил наши бизнес-процессы. Рекомендую всем, кто
                ищет эффективные решения в подборе персонала.
              </p>
              <div className={style.reviews__client}>
                <Image src={client1} alt="client 1" />
                <p>Виктор</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p>
                Сотрудничество с вашей компанией стало лучшим решением для
                нашего бизнеса. Подобранные специалисты идеально вписались в
                нашу команду и быстро показали отличные результаты. Мы особенно
                оценили их профессионализм и внимательность к деталям, что
                помогло нам найти сотрудников, способных внести значительный
                вклад в развитие компании.
              </p>
              <div className={style.reviews__client}>
                <Image src={client2} alt="client 2" />
                <p>Данила</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p>
                Очень доволен услугами по подбору персонала. Ваши специалисты
                профессионально и быстро нашли нам несколько ключевых
                сотрудников, что значительно улучшило наши рабочие процессы.
                Отдельно хочу отметить высокий уровень сервиса и индивидуальный
                подход к нашим требованиям, что позволило найти идеальных
                кандидатов.
              </p>
              <div className={style.reviews__client}>
                <Image src={client3} alt="client 3" />
                <p>Игорь</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p>
                Команда настоящих профессионалов! Подбор кадров прошел гладко и
                без проблем, нашли именно тех людей, которые идеально подошли
                под наши требования. Весь процесс был хорошо организован, и мы
                получили качественную поддержку на каждом этапе, что значительно
                облегчило нам задачу.
              </p>
              <div className={style.reviews__client}>
                <Image src={client4} alt="client 4" />
                <p>Владимир</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <p>
                Рекомендую вашу компанию всем, кто ищет качественный подбор
                персонала. Высокий уровень сервиса и индивидуальный подход к
                каждому клиенту действительно впечатляют. Благодаря вам мы
                смогли сформировать команду, которая отлично справляется со
                всеми задачами и способствует нашему успеху.
              </p>
              <div className={style.reviews__client}>
                <Image src={client5} alt="client 5" />
                <p>Андрей</p>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={style.reviews__buttons}>
            <button ref={sliderNavigationLeft} className="sliderLeft">
              <ChevronLeft />
            </button>
            <button ref={sliderNavigationRight} className="sliderRight">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
