import React from 'react';
import './FavoritesPage.css';

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="favorites-page">
      <h1>Избранное</h1>
      {favorites.length === 0 ? (
        <p>Ваш список избранного пуст.</p>
      ) : (
        <div className="favorite-items">
          {favorites.map((item, index) => (
            <div key={index} className="favorite-item">
              <img src={item.image} alt={item.name} className="favorite-item-image" />
              <div className="favorite-item-details">
                <h3>{item.name}</h3>
                <p>Размер: {item.size}</p>
                <p>Цена: {item.price}₽</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
