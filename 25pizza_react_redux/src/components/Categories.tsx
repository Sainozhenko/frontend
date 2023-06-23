import React from 'react'
import {onClickCategory, selectFilter} from '../redux/slices/filterSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

const Categories:React.FC = () => {
    const state:{categoryId:number, categoryNames:string[]} = useSelector(selectFilter);
    const dispatch = useDispatch();
  return (
    <ul>
      {state.categoryNames.map((name:string,index:number)=>(
        <li key={index}>
            <button
            onClick={()=>dispatch(onClickCategory(index))}
            >{name}</button>
        </li>
      ))}
    </ul>
  )
}

export default Categories;
