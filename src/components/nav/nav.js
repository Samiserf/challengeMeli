import React from "react";
import css from "./nav.module.scss";
import logoMeli from "../../images/Logo_ML.png";
import { useNavigate, Link } from "react-router-dom";
import searchIcon from "../../images/search.png";

export default function Nav({ search, setSearch }) {
  const navigate = useNavigate();
  return (
    <div className={css.containerNav}>
      <div className={css.nav}>
        <h1>
          <Link to="/">
            <img alt="Mercado Libre" src={logoMeli} />
          </Link>
        </h1>
        <form className={css.search}>
          <input
            type="text"
            name="search"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            onClick={() =>
              search !== null &&
              search !== "" &&
              navigate(`/items?search=${search}`)
            }
          >
            <img src={searchIcon} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}
