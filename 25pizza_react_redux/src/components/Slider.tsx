import React from "react";
import { useSelector } from "react-redux";
import { selectItemsData } from "../redux/slices/itemsSlice";

const Slider: React.FC = () => {
  const { item } = useSelector(selectItemsData);
  const [mainImage, setMainImage] = React.useState<string>(item.images[0]);
  const [imageActive, setImageActive] = React.useState<number>(0);
  const onClickImage = (evt: React.MouseEvent, index: number) => {
    const target = evt.target as HTMLImageElement;
    setMainImage(target.currentSrc);
    setImageActive(index);
  };

  return (
    <div className="slider">
      <img src={mainImage} alt={item.title} className="slider__image" />
      <ul className="slider__mini-list">
        {item.images.map((image: string, index: number) => (
          <li className="slider__mini-item" key={index}>
            <img
              src={image}
              alt=""
              className={`slider__mini-image ${
                imageActive === index ? "slider__mini-image_active" : ""
              }`}
              onClick={(evt) => onClickImage(evt, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
