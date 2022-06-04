import { useEffect, useState, useMemo } from "react";
import css from "./items.module.scss";
import { useLocation } from "react-router-dom";
import ItemPreview from "../../components/itemPreview/itemPreview";
import { URL_API } from "../../const/config.js";

export default function Items() {
  let query = useQuery();
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(`${URL_API}/items?q=${query}`);
    fetch(`${URL_API}/items?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setItems(response.items.slice(0, 5));
        console.log(response);
      });
  }, []);

  return (
    <div className={css.containerListItems}>
      <div className={css.ListItems}>
        {items.length > 0 ? (
          items.map((item) => <ItemPreview key={item.id} item={item} />)
        ) : (
          <h2>Cargando articulos</h2>
        )}
      </div>
    </div>
  );
}

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get("search"), [search]);
}
