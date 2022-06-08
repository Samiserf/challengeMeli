import { useEffect, useState } from "react";
import css from "./items.module.scss";
import ItemPreview from "../../components/itemPreview";
import { URL_API } from "../../const/config.js";
import Breadcrumb from "../../components/breadcrumb";

export default function Items({ query }) {
  const [items, setItems] = useState({});

  console.log(query.replace(/[^\w\s]/gi, ""));

  useEffect(() => {
    fetch(`${URL_API}/items?q=${query.replace(/[^\w\s]/gi, "")}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setItems(response);
      });
  }, [query]);

  console.log(items);

  return (
    <>
      <div className={css.containerListItems}>
        <Breadcrumb categories={(items && items.categories) || []} />
        <div className={css.ListItems}>
          {Object.keys(items).length > 0 &&
            items.items.length > 0 &&
            items.items.map((item) => (
              <ItemPreview key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
}
