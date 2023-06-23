import React from 'react'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

const HeaderCart:React.FC = () => {

    const {totalPrice, items} = useSelector(selectCart);
    const totalCount = items.reduce(
        (acc:number,item:{count:number})=>acc+item.count,0);


  return (
    <>
    <div>
        <span>{totalPrice}$</span>
    </div>
    <div>
        <img src="" 
        alt="Иконка корзины" 
        />{totalCount}
    </div>
    </>
  )
}

export default HeaderCart;
