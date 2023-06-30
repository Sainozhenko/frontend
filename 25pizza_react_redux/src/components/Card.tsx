import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { selectItemsData, setItem } from "../redux/slices/itemsSlice";
import ParamsBlock from "./ParamsBlock";
import { ReactComponent as StarIcon } from "../assets/images/star_icon.svg";
import { selectFilter } from "../redux/slices/filterSlice";

type CardItem = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
};

const Card: React.FC<CardItem> = ({
  id,
  title,
  price,
  images,
  sizes,
  types,
  rating,
  info,
}) => {
  const counter = useSelector(selectCartItemById(id));
  const count: number = counter && counter.count;
  const { activeSize, activeType } = useSelector(selectItemsData);
  const { categoryName } = useSelector(selectFilter);
  const isCategoryClose = categoryName === "Закрытые";

  const dispatch = useDispatch();

  const cardItem: CardItem = {
    id,
    title,
    price,
    images,
    sizes,
    types,
    rating,
    info,
  };
  return (
    <article className={`card ${isCategoryClose ? "card_disabled" : ""}`}>
      <div className="card__rating">
        <StarIcon className="card__rating-icon" />
        <span className="card__rating-text">{rating}</span>
      </div>
      <img src={images[0]} alt={title} className="card__image" />
      <h2 className="card__title">
        <Link
          to={`/pizza/${id}`}
          className="card__link"
          onClick={() => dispatch(setItem(cardItem))}
        >
          {title}
        </Link>
      </h2>
      <ParamsBlock className="card__params-block" types={types} sizes={sizes} />
      <div className="card__footer">
        <span className="card__price">от {price} ₽</span>
        <button
          className="card__button button button_type_primary-outlined"
          onClick={() => dispatch(addToCart(cardItem))}
        >
          <span className="card__button-icon">+</span>
          Добавить
          {count && <span className="card__button-counter">{count}</span>}
        </button>
      </div>
    </article>
  );
};

export default Card;
