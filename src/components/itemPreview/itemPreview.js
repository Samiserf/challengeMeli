import React from "react";
import css from "./itemPreview.module.scss";
import { Link } from "react-router-dom";
import shippingImage from "../../images/shipping.png";
import { convertFormatCurrencies } from "../../utils/shareFunctions";

export default function ItemPreview({ item }) {
  return (
    <div className={css.containerItemPreview}>
      <div className={css.contImage}>
        <Link aria-label="detalle del producto" to={`/items/${item.id}`}>
          <img src={item.picture} alt={"item de venta" + item.title} />
        </Link>
      </div>
      <div className={css.containerInfoItem}>
        <div>
          <Link aria-label="detalle del producto" to={`/items/${item.id}`}>
            <h2>
              $
              {item.price.amount
                ? convertFormatCurrencies(item.price.amount, 2).substring(
                    1,
                    convertFormatCurrencies(item.price.amount, 2).length - 3
                  )
                : 0}
            </h2>
          </Link>
          {item.free_shipping && <img src={shippingImage} alt="isShiping" />}
        </div>
        <p>{item.title}</p>
        <p>Completo único!</p>
      </div>
      <div className={css.containerItemLocation}>
        <span>{item.city_name || "Default"}</span>
      </div>
    </div>
  );
}
