import React from 'react';
import './CartPage.css';

const CartPage = ({ cart }) => {
  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Размер: {item.size}</p>
                <p>Цена: {item.price}₽</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <p>Общая сумма: {cart.reduce((sum, item) => sum + item.price, 0)}₽</p>
        <button className="checkout-button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default CartPage;
