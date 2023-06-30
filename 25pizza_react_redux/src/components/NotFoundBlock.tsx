import React from "react";
import { Link } from "react-router-dom";

const NotFoundBlock: React.FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title title">404 страница не найдена</h1>
      <p className="not-found__descr">
        К сожалению такой страницы не существует
        <span>☹️</span>
      </p>
      <Link to="/" className="not-found__button button button_type_primary">
        На главную
      </Link>
    </div>
  );
};

export default NotFoundBlock;
