import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <header className="header" onClick={() => (window.location.href = "/")}>
      <div className="header-content">
        <div className="header-left">
          {/* Логотип убран */}
        </div>
        <div className="header-right">
          {isSearchVisible && (
            <div className="search-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Введите запрос..."
              />
              <button
                className="close-search-button"
                onClick={(e) => {
                  e.stopPropagation(); // Останавливаем всплытие, чтобы не сработал переход на главную
                  toggleSearch();
                }}
              >
                ✖
              </button>
            </div>
          )}
          {!isSearchVisible && (
            <button
              className="search-button"
              onClick={(e) => {
                e.stopPropagation(); // Останавливаем всплытие
                toggleSearch();
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          )}
          <a href="/favorites" className="header-icon">
            <i className="fas fa-heart"></i>
          </a>
          <a href="/cart" className="header-icon">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="/account" className="header-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
