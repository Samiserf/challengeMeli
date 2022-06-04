import React from "react";
import css from "./itemPreview.module.scss";
import { Link } from "react-router-dom";

export default function ItemPreview({ item }) {
  return (
    <div className={css.containerItemPreview}>
      <div className={css.contImage}>
        <Link to={`/items/${item.id}`}>
          <img src={item.picture} />
        </Link>
      </div>
      <div className={css.containerInfoItem}>
        <div>
          <Link to={`/items/${item.id}`}>
            <h2>$ {item.price.amount}</h2>
          </Link>
          {/* TO DO LOGICA ENVIO */}
          {/* <span></span> */}
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
