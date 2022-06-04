import { useState, useMemo } from "react";
import css from "./App.module.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/nav";
import HomePage from "./pages/home/home";
import ItemsPage from "./pages/items/items";
import DetaultItemsPage from "./pages/detailItems/detailItems";

function App() {
  let query = useQuery();

  const [search, setSearch] = useState(query);
  return (
    <div className={css.app}>
      {/* <div className={css.appContainer}> */}
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:itemId" element={<DetaultItemsPage />} />
      </Routes>
      {/* </div> */}
    </div>
  );
}
export default App;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search).get("search"), [search]);
}
