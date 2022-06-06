import React from "react";
import css from "./nav.module.scss";
import logoMeli from "../../Logo_ML.png";
import { useNavigate, Link } from "react-router-dom";
import searchIcon from "../../search.png";

export default function Nav({ search, setSearch }) {
  const navigate = useNavigate();
  return (
    <div className={css.containerNav}>
      <div className={css.nav}>
        <Link to="/">
          <img alt="logo meli" src={logoMeli} />
        </Link>
        <form className={css.search}>
          <input
            type="text"
            name="search"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="button"
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
