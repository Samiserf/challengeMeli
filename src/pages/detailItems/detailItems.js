import { useEffect, useState } from "react";
import css from "./detailItem.module.scss";
import { useParams } from "react-router-dom";
import { URL_API } from "../../const/config.js";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { convertFormatCurrencies } from "../../utils/shareFunctions";

export default function ItemsDetailPage() {
  const { itemId } = useParams();
  const [itemDetail, setItemDetail] = useState({});

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

  console.log(price);

  const categoriesMock = [
    "Electronica, audio y video",
    "Ipod",
    "Reproductores",
    "Touch iPod",
    "32 GB",
  ];

  return (
    <>
      <div className={css.containerDetailItem}>
        <Breadcrumb categories={categoriesMock} />
        <div className={css.detailItem}>
          <div className={css.leftSideContainer}>
            <div className={css.imageDetail}>
              <img src={itemDetail.picture} alt="detail item" />
            </div>
            <div className={css.detailItem}>
              <h3>Descripción del producto</h3>
              <p>{itemDetail.description}</p>
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
      </div>
    </>
  );
}
