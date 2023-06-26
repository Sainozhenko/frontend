import React from 'react'
import { useSelector } from 'react-redux';
import { selectItemsData } from '../redux/slices/itemsSlice';
import {ReactComponent as StarIcon} from '../assets/images/star_icon.svg';

const Rating: React.FC<{className:string}> = ({className}) => {
 const {item} =  useSelector(selectItemsData);
    return (
    <p>
      <span> {
        [...new Array(5).map((_,index)=> (
            <StarIcon />
        ))]}</span>
        {item.reviews} Отзывов
    </p>
  )
}

export default Rating;
