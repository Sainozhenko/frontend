import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../redux/slices/filterSlice'
import { selectSearch } from '../redux/slices/searchSlice'
import Categories from '../components/Categories'
import Sorting from '../components/Sorting'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'
import { fetchItems } from '../redux/slices/itemsSlice'

const Home = () => {
    const {categoryId, sortingItem, categoryNames,currentPage} = useSelector(selectFilter);
    const {searchValue} = useSelector(selectSearch);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            //@ts-ignore
            fetchItems({
                categoryId,
                sortingItem,
                searchValue,
                currentPage
            })
        )
    },[categoryId, sortingItem, searchValue,currentPage])

  return (
    <>
      <section>
        <Categories/>
        <Sorting/>
      </section>
      <Cards title={`${categoryNames[categoryId]} пиццы`}/>
      <Pagination/>
    </>
  )
}

export default Home;
