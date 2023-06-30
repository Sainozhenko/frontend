import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setCurrentPage } from "../redux/slices/filterSlice";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectFilter);
  return (
    <section className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button
            // Так как сервер не возращает количество страниц пришлось захаркодить
            className={`pagination__button ${
              currentPage === 1 ? "button_disabled" : ""
            } button button_type_primary-outlined`}
            disabled={currentPage === 1}
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          >
            &lt;
          </button>
        </li>
        <li className="pagination__item">
          <button
            className={`pagination__button ${
              currentPage === 1 ? "pagination__button_active" : ""
            } button button_type_primary-outlined`}
            onClick={() => dispatch(setCurrentPage(1))}
          >
            1
          </button>
        </li>
        <li className="pagination__item">
          <button
            className={`pagination__button ${
              currentPage === 2 ? "pagination__button_active" : ""
            } button button_type_primary-outlined`}
            onClick={() => dispatch(setCurrentPage(2))}
          >
            2
          </button>
        </li>
        <li className="pagination__item">
          <button
            className={`pagination__button ${
              currentPage === 2 ? "button_disabled" : ""
            } button button_type_primary-outlined`}
            disabled={currentPage === 2}
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          >
            &gt;
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
