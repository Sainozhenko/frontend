import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

type LogoProps = {
  className: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`logo ${className}`}>
      <img src={logo} alt="Логотип Реакт Пицца" className="logo__image" />
      <div className="logo__block">
        <h1 className="logo__title">React Pizza</h1>
        <p className="logo__subtitle">самая вкусная пицца только у нас</p>
      </div>
    </Link>
  );
};

export default Logo;
