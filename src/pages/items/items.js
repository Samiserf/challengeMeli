import { useEffect, useState } from "react";
import css from "./items.module.scss";
import ItemPreview from "../../components/itemPreview/itemPreview";
import { URL_API } from "../../const/config.js";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";

export default function Items({ query }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${URL_API}/items?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setItems(response.items.slice(0, 5));
      });
  }, [query]);

  return (
    <>
      <div className={css.containerListItems}>
        <Breadcrumb />
        <div className={css.ListItems}>
          {items.length > 0 &&
            items.map((item) => <ItemPreview key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
}
