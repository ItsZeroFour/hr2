import React from "react";
import style from "./style.module.scss";
import BrandLogo1 from "../../../public/images/brands/brand-1.svg";
import BrandLogo2 from "../../../public/images/brands/brand-2.svg";
import BrandLogo3 from "../../../public/images/brands/brand-3.svg";
import BrandLogo4 from "../../../public/images/brands/brand-4.svg";

const Brands = () => {
  return (
    <section className={style.brands}>
      <div className="container">
        <div className={style.brands__wrapper}>
          <ul>
            <li>
              <BrandLogo1 />
            </li>

            <li>
              <BrandLogo2 />
            </li>

            <li>
              <BrandLogo3 />
            </li>

            <li>
              <BrandLogo4 />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Brands;
