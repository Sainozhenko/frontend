import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { selectFilter } from "../redux/slices/filterSlice";
import { fetchItems, selectItemsData } from "../redux/slices/itemsSlice";
import { selectSearch } from "../redux/slices/searchSlice";
import Pagination from "../components/Pagination";

const Search: React.FC = () => {
  const { categoryId, sortingItem } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);
  const { items } = useSelector(selectItemsData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      // На время потом исправлю
      // @ts-ignore
      fetchItems({
        categoryId,
        sortingItem,
        searchValue,
      })
    );
  }, [categoryId, sortingItem, searchValue]);
  return (
    <div className="search-page">
      <Cards
        title={
          items.length > 0
            ? `Результат поиска: ${searchValue}`
            : `По запросу ${searchValue} ничего не найдено`
        }
      />
    </div>
  );
};

export default Search;
