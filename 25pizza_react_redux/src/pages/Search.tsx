import React from 'react'
import { selectFilter } from '../redux/slices/filterSlice';
import { useSelector } from 'react-redux';
import { selectSearch } from '../redux/slices/searchSlice';
import { selectItemsData } from '../redux/slices/itemsSlice';
import { useDispatch } from 'react-redux';
import Cards from '../components/Cards';

const Search:React.FC = () => {
    const {categoryId,sortingItem} = useSelector(selectFilter);
    const {searchValue} = useSelector(selectSearch);
    const {items} = useSelector(selectItemsData);
    const dispatch = useDispatch();
  return (
    <div>
      <Cards
        title={
            items.length > 0
            ? `Результат поиска: ${searchValue}`
            : `По запросу ${searchValue} ничего не найдено`
            }
        />
    </div>
  )
}

export default Search;
