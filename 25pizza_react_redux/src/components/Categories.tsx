import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickCategory, selectFilter } from "../redux/slices/filterSlice";

const Categories: React.FC = () => {
  const { categoryId, categoryNames } = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ul className="categories">
      {categoryNames.map((name: string, index: number) => (
        <li className="categories__item" key={index}>
          <button
            type="button"
            className={`categories__button button button_type_light ${
              categoryId === index ? "categories__button_active" : ""
            }`}
            onClick={() => dispatch(onClickCategory(index))}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
