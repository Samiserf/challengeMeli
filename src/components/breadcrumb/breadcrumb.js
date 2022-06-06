import React from "react";
import css from "./breadcrumb.module.scss";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Breadcrumb({ categories }) {
  const categoriesMock = [
    "Electronica, audio y video",
    "Ipod",
    "Reproductores",
    "Touch iPod",
    "32 GB",
  ];

  return (
    <div className={css.containerBreadcrumb}>
      {categoriesMock.map((category, i) => (
        <React.Fragment key={category}>
          <Link to={`/items?search=${category}`}>{`${category}`}</Link>
          {categoriesMock.length !== i + 1 && <span>{`>`}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}
