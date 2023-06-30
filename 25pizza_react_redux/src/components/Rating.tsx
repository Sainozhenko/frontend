import React from "react";
import { ReactComponent as StarIcon } from "../assets/images/star_icon.svg";
import { selectItemsData } from "../redux/slices/itemsSlice";
import { useSelector } from "react-redux";

type RatingProps = {
  className: string;
};

const Rating: React.FC<RatingProps> = ({ className }) => {
  const { item } = useSelector(selectItemsData);
  return (
    <p className={`rating ${className}`}>
      <span className="rating__icons">
        {[...new Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`rating__icon ${
              index < item.rating ? "rating__icon_active" : ""
            }`}
          />
        ))}
      </span>
      {item.reviews} отзывов
    </p>
  );
};

export default Rating;
