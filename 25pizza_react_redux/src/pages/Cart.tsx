import React from 'react'
import { useSelector } from 'react-redux';
import { removeAllItems, selectCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import CartCards from '../components/CartCards';
import { CardItem } from '../components/Card';

const Cart:React.FC = () => {
    const {items, totalPrice} = useSelector(selectCart);
    const totalCount = items.reduce(
        (acc:number,item:{count:number})=> acc+item.count,
        0
        );
        const dispatch = useDispatch();
        return (
            <div>
                {items.length > 0 ? (
                    <>
                        <div>
                            <h1>Корзина</h1>
                            <button onClick={() => dispatch(removeAllItems())}>
                                Очистить корзину
                            </button>
                        </div>
    
                        <div>
                            {items.map((item: CardItem) => (
                                <CartCards key={item.id} {...item} />
                            ))}
                        </div>
    
                        <div>
                            <p>
                                Всего пицц:
                                <span>{totalCount} шт.</span>
                            </p>
                            <p>
                                Сумма заказа:
                                <span>{totalPrice} $</span>
                            </p>
                        </div>
                        <div>
                        <a href="#">Оплатить</a>
                    </div>
                </>
            ) : (
                <div>
                    <h1>Корзина пуста 😔</h1>
                    <p>
                        Вероятнее всего, вы не заказывали пиццу. Для того, чтобы
                        заказать пиццу, перейди на главную страницу
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
