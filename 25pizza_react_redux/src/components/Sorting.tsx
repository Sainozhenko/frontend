import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ISortingItem, onClickSort, selectFilter } from '../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

const Sorting:React.FC = () => {
    const[isVisible, setIsVisible] = useState<boolean>(false);
    const {sortingItem} = useSelector(selectFilter);
    const dispatch = useDispatch();

    const order:string = sortingItem.order.includes('asc')? 'desc': 'asc';

    const sortingItems: ISortingItem[] = [
        {name: 'популярности', sortProperty: 'rating', order}
    ];

    const sortingRef= React.useRef<HTMLSpanElement>(null);

    const onClickSortingButton = (item:ISortingItem)=>{
        dispatch(onClickSort(item));
        setIsVisible(false);
    }

    const onClickOutside = (e:MouseEvent) => {
        if(e.target!==sortingRef.current){
            setIsVisible(false);
        }
    }

    useEffect(()=>{
        document.addEventListener('click', onClickOutside);
        return () =>{
            document.removeEventListener('click', onClickOutside);
        }
    },[]);


    return (
    <div>
      <p>Сортировка по: 
        <span onClick={()=>setIsVisible(!isVisible)} ref={sortingRef}>{sortingItem.name}</span>
      </p>
      <ul>
        {sortingItems.map((item:ISortingItem,index:number)=>(
            <li key={index}>
                <button onClick={()=>onClickSortingButton(item)}>{item.name}</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Sorting;
