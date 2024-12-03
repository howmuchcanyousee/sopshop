import React, { useContext } from 'react';
import { CartContext } from '../App';

const CartPage = () => {
    const { cartItems } = useContext(CartContext);

    if (!cartItems) {
        // Обработка случая, когда контекст не передан
        return <p>Ошибка: контекст корзины недоступен.</p>;
    }

    return (
        <div>
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;
