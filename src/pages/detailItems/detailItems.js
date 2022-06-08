import { useEffect } from "react";
import css from "./detailItem.module.scss";
import { useParams } from "react-router-dom";
import { URL_API } from "../../const/config.js";
import { convertFormatCurrencies } from "../../utils/shareFunctions";

export default function ItemsDetailPage({ setItemDetail, itemDetail }) {
  const { itemId } = useParams();

  /* 
    useEffect : setea el estado itemDetail a traves de una consulta al backend que devuelve toda la informacion necesaria del detalle.
  */
  useEffect(() => {
    fetch(`${URL_API}/items/${itemId}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setItemDetail(response.item);
      });
  }, [itemId]);

  const price =
    itemDetail.price && itemDetail.price.amount
      ? convertFormatCurrencies(itemDetail.price.amount, 2)
      : 0;

  return (
    <>
      {Object.keys(itemDetail).length > 0 && (
        <>
          <div className={css.detailItem}>
            <div className={css.contentDetailItem}>
              <div className={css.leftSideContainer}>
                <div className={css.imageDetail}>
                  <img src={itemDetail.picture} alt="detail item" />
                </div>
              </div>
              <div className={css.rightSideContainer}>
                <span>
                  {itemDetail.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {itemDetail.sold_quantity} vendidos
                </span>
                <h2>{itemDetail.title}</h2>
                <span>
                  ${price === 0 ? 0 : price.substring(1, price.length - 3)}
                  <sup>
                    {price === 0
                      ? "00"
                      : price.substring(price.length - 2, price.length)}
                  </sup>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    console.log("Comprar el producto con id", itemDetail.id)
                  }
                >
                  Comprar
                </button>
              </div>
            </div>
            <div className={css.descriptionItem}>
              <h3>Descripción del producto</h3>
              <p>{itemDetail.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
