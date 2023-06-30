import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItemsData,
  setActiveSize,
  setActiveType,
} from "../redux/slices/itemsSlice";

type ParamsBlockProps = {
  className: string;
  types: number[];
  sizes: number[];
};

const ParamsBlock: React.FC<ParamsBlockProps> = ({
  className,
  types,
  sizes,
}) => {
  const { typeNames } = useSelector(selectItemsData);
  const dispatch = useDispatch();
  const [typeIndex, setTypeIndex] = React.useState<number>(0);
  const [sizeIndex, setSizeIndex] = React.useState<number>(0);
  const onClickType = (typeId: number) => {
    setTypeIndex(typeId);
    dispatch(setActiveType(typeId));
  };
  const onClickSize = (index: number) => {
    setSizeIndex(index);
    dispatch(setActiveSize(index));
  };
  return (
    <div className={`card__block ${className}`}>
      <ul className="card__block-list">
        {types &&
          types.map((typeId, index) => (
            <li className="card__block-item" key={index}>
              <button
                className={`card__block-button button ${
                  typeIndex === typeId ? "card__block-button_active" : ""
                }`}
                type="button"
                onClick={() => onClickType(typeId)}
              >
                {typeNames[typeId]}
              </button>
            </li>
          ))}
      </ul>
      <ul className="card__block-list">
        {sizes &&
          sizes.map((size, index) => (
            <li className="card__block-item" key={index}>
              <button
                className={`card__block-button button ${
                  sizeIndex === index ? "card__block-button_active" : ""
                }`}
                type="button"
                onClick={() => onClickSize(index)}
              >
                {size} см.
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ParamsBlock;
