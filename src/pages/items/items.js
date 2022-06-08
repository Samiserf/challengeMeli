import css from "./items.module.scss";
import ItemPreview from "../../components/itemPreview";

export default function Items({ items }) {
  return (
    <>
      <div className={css.ListItems}>
        {Object.keys(items).length > 0 &&
          items.items.length > 0 &&
          items.items.map((item) => <ItemPreview key={item.id} item={item} />)}
      </div>
    </>
  );
}
