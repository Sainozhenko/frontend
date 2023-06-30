import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemById } from "../redux/slices/cartSlice";
import Slider from "../components/Slider";
import ParamsBlock from "../components/ParamsBlock";
import Rating from "../components/Rating";
import { selectItemsData, setItem } from "../redux/slices/itemsSlice";
import { useNavigate, useParams } from "react-router-dom";
// На время потом исправлю
// @ts-ignore
import { animated, useSpring } from "@react-spring/web";
import { selectFilter } from "../redux/slices/filterSlice";

const Pizza: React.FC = () => {
  const { id } = useParams();
  const item = JSON.parse(localStorage.getItem("item") || "{}");
  const cartItem = useSelector(selectCartItemById(item.id));
  const { categoryName } = useSelector(selectFilter);
  const isCategoryClose = categoryName === "Закрытые";

  const count = cartItem && cartItem.count;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const res = await fetch(
          `https://6442fcd190738aa7c069c92c.mockapi.io/items/${id}`
        );
        const data = await res.json();
        dispatch(setItem(data));
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  const animationTranslateTop = useSpring({
    from: { transform: "translateY(-50px)" },
    to: { transform: "translateY(0)" },
  });

  const animationTranslateLeft = useSpring({
    from: { transform: "translateX(-50px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    delay: 200,
  });

  const animationTranslateRight = useSpring({
    from: { transform: "translateX(50px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    delay: 600,
  });

  const animationScale = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    delay: 400,
  });

  if (!item) {
    return <>loading</>;
  }

  return (
    <div className="pizza-page">
      <animated.div
        className="pizza-page__header"
        style={animationTranslateTop}
      >
        <h1 className="pizza-page__title">{item.title}</h1>
        <Rating className="rating_type_watching" />
      </animated.div>
      <div className="pizza-page__row">
        <animated.div style={animationTranslateLeft}>
          <Slider />
        </animated.div>
        <div className="pizza-page__blocks">
          <animated.div className="pizza-page__info" style={animationScale}>
            <h2 className="pizza-page__info-title">Ингредиенты:</h2>
            <ul className="pizza-page__info-list">
              {item.info &&
                item.info.map((element: string, index: number) => (
                  <li className="pizza-page__info-item" key={index}>
                    {element}
                  </li>
                ))}
            </ul>
          </animated.div>
          <animated.div
            className="pizza-page__block"
            style={animationTranslateRight}
          >
            <span className="pizza-page__price">{item.price} ₽</span>
            <ParamsBlock
              className="pizza-page__params-block"
              types={item.types}
              sizes={item.sizes}
            />
            <button
              className={`pizza-page__button button button_type_primary ${
                isCategoryClose ? "button_disabled" : ""
              }`}
              onClick={() => dispatch(addToCart(item))}
              disabled={isCategoryClose ? true : false}
            >
              <span className="card__button-icon">+</span>
              Добавить в корзину
              {count && <span className="card__button-counter">{count}</span>}
            </button>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
