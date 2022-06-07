import React from "react";
import css from "./breadcrumb.module.scss";
import { Link } from "react-router-dom";

export default function Breadcrumb({ categories }) {
  return (
    <div className={css.containerBreadcrumb}>
      {categories.map((category, i) => (
        <React.Fragment key={category}>
          <Link to={`/items?search=${category}`}>{`${category}`}</Link>
          {categories.length !== i + 1 && <span>{`>`}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
