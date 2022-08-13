import { base_url } from "../../constants/constants";
import css from "./PizzaCard.module.css";

function PizzaCard({
  addToBasket,
  title,
  description,
  price,
  img,
  id,
  isAdmin,
  link,
}) {
  const handleClick = () => addToBasket({ title, description, price, img, id });

  const handleDelete = () => {
    fetch(`${base_url}${link}/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      alert("Successfuly deleted")
      window.location.reload()
    })
  }

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src={
            img ||
            "https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"
          }
          alt={title}
        />
      </div>
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
      <div className={css.footer}>
        <div className={css.price}>от {price} сом</div>
        {!isAdmin && (
          <button onClick={handleClick} className="btn">
            Выброть
          </button>
        )}
      </div>
      {isAdmin && (
        <div>
          <button onClick={handleDelete} className="btn">Delete</button>
          <button className="btn">Change</button>
        </div>
      )}
    </div>
  );
}

export default PizzaCard;
