import React from "react";
import iconCart from "../assets/images/icon_cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

const HeaderCart: React.FC = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0
  );

  return (
    <Link to="/cart" className="header__cart button button_type_primary">
      <div className="header__cart-block">
        <span className="header__cart-text">{totalPrice} ₽</span>
      </div>
      <div className="header__cart-line"></div>
      <div className="header__cart-block">
        <span className="header__cart-text">
          <img
            src={iconCart}
            alt="Иконка корзины"
            className="header__cart-icon"
          />
          {totalCount}
        </span>
      </div>
    </Link>
  );
};

export default HeaderCart;
