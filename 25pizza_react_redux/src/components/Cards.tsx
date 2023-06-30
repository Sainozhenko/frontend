import React from "react";
import { useSelector } from "react-redux";
import { selectItemsData } from "../redux/slices/itemsSlice";
import Card from "./Card";
import Skeleton from "./Skeleton";

type CardsProps = {
  title: string;
};

type CardsItem = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
};

const Cards: React.FC<CardsProps> = ({ title }) => {
  const { items, status } = useSelector(selectItemsData);

  return (
    <section className="cards">
      <h2 className="title cards__title">{title}</h2>
      {status === "error" ? (
        <p className="cards__error">
          Данные не загрузились :( Попробуйте зайти позже
        </p>
      ) : (
        <div className="cards__list">
          {status === "loading"
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((item: CardsItem) => <Card {...item} key={item.id} />)}
        </div>
      )}
    </section>
  );
};

export default Cards;
