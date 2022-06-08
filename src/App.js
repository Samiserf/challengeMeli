import { useState, useMemo, useEffect } from "react";
import css from "./App.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/nav";
import HomePage from "./pages/home";
import ItemsPage from "./pages/items";
import DetaultItemsPage from "./pages/detailItems";
import Breadcrumb from "./components/breadcrumb";
import { URL_API } from "./const/config";

function App() {
  let query = useQuery();

  const [search, setSearch] = useState("");
  const [items, setItems] = useState({});
  const [itemDetail, setItemDetail] = useState({});

  /* 
    useEffect : setea el estado items con la informacion de busqueda.
    uso : se utiliza tanto para popular la pantalla de busqueda como para popular el breadcrumb y se controla a traves de las variables de estado query(buscador) y itemDetail(detalle)
  */
  useEffect(() => {
    setSearch(query || "");
    (Object.keys(itemDetail).length > 0 || query) &&
      fetch(
        `${URL_API}/items?q=${
          query
            ? query && query.replace(/[^\w\s]/gi, "")
            : itemDetail && itemDetail.title.replace(/[^\w\s]/gi, "")
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setItems(response);
        });
  }, [query, itemDetail]);

  /* 
    uso : Se utiliza router-dom para organizar las rutas
  */
  return (
    <div className={css.app}>
      <Nav search={search} setSearch={setSearch} />
      <div className={css.containerDetailItem}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/items"
            element={
              <>
                <Breadcrumb categories={(items && items.categories) || []} />
                <ItemsPage query={query} items={items} setItems={setItems} />
              </>
            }
          />
          <Route
            path="/items/:itemId"
            element={
              <>
                <Breadcrumb categories={(items && items.categories) || []} />

                <DetaultItemsPage
                  setItemDetail={setItemDetail}
                  itemDetail={itemDetail}
                />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get("search"), [search]);
}
