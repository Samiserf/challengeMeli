import { useEffect, useState } from "react";
import css from "./detailItem.module.scss";
import { useParams } from "react-router-dom";
import { URL_API } from "../../const/config.js";

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

  console.log(itemDetail);

  return (
    <div className={css.containerDetailItem}>
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
            $ {itemDetail.price && itemDetail.price.amount}
            <sup>00</sup>
          </span>
          <button type="button" onClick={() => console.log("Comprar")}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

// function useQuery() {
//   const { search } = useLocation();
//   return useMemo(() => new URLSearchParams(search).get("search"), [search]);
// }
