import React from 'react'
import { useSelector } from 'react-redux';
import { selectItemsData } from '../redux/slices/itemsSlice';
import Skeleton from './Skeleton';
import Card, { CardItem } from './Card';

const Cards:React.FC<{title: string}> = ({title}) => {
    const {items, status} = useSelector(selectItemsData);
  return (
    <section>
      <h2>{title}</h2>
      {status === 'error' ? (
        <p>
            Данные не загрузились... Пробуйте зайти позже 
        </p>
        ): (
        <div>
            {status === 'loading' ? [...new Array(8)].map((_, index)=> <Skeleton key={index} />):
            items.map((item:CardItem)=> <Card {...item} key={item.id}/> ) }
        </div>
        )
      }
    </section>
  )
}

export default Cards;
