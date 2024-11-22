import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const banners = [
    'https://via.placeholder.com/1920x600?text=1920x600+Banner+1',
    'https://via.placeholder.com/1920x600?text=1920x600+Banner+2',
    'https://via.placeholder.com/1920x600?text=1920x600+Banner+3',
    'https://via.placeholder.com/1920x600?text=1920x600+Banner+4',
  ];

  const products = [
    { id: 1, name: 'Product 1', images: ['https://via.placeholder.com/200x200'] },
    { id: 2, name: 'Product 2', images: ['https://via.placeholder.com/200x200'] },
    { id: 3, name: 'Product 3', images: ['https://via.placeholder.com/200x200'] },
    { id: 4, name: 'Product 4', images: ['https://via.placeholder.com/200x200'] },
    { id: 5, name: 'Product 5', images: ['https://via.placeholder.com/200x200'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const container = document.querySelector('.brands-container');
    const items = document.querySelectorAll('.brand-item');

    let cloneItems = [];
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      container.appendChild(clone);
      cloneItems.push(clone);
    });

    let scrollSpeed = 1;
    let position = 0;

    const scroll = () => {
      position -= scrollSpeed;
      if (position <= -items.length * (150 + 20)) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCartOrFavorites = (action) => {
    if (!selectedSize) {
      alert('Выберите размер перед добавлением!');
      return;
    }
    alert(`${action} добавлен: ${selectedProduct.name}, размер: ${selectedSize}`);
    closeModal();
  };

  return (
    <div className="App">
      <Header />
      {/* Секция с кнопками брендов */}
      <div className="brands-slider">
        <div className="brands-container">
          <a href="/brand/nike" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Nike"
              alt="Nike"
              className="brand-image"
            />
          </a>
          <a href="/brand/adidas" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Adidas"
              alt="Adidas"
              className="brand-image"
            />
          </a>
          <a href="/brand/puma" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Puma"
              alt="Puma"
              className="brand-image"
            />
          </a>
          <a href="/brand/new-balance" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=New+Balance"
              alt="New Balance"
              className="brand-image"
            />
          </a>
          <a href="/brand/asics" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Asics"
              alt="Asics"
              className="brand-image"
            />
          </a>
          <a href="/brand/reebok" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Reebok"
              alt="Reebok"
              className="brand-image"
            />
          </a>
          <a href="/brand/converse" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Converse"
              alt="Converse"
              className="brand-image"
            />
          </a>
          <a href="/brand/vans" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Vans"
              alt="Vans"
              className="brand-image"
            />
          </a>
          <a href="/brand/jordan" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Jordan"
              alt="Jordan"
              className="brand-image"
            />
          </a>
          <a href="/brand/fila" className="brand-item">
            <img
              src="https://via.placeholder.com/150x100?text=Fila"
              alt="Fila"
              className="brand-image"
            />
          </a>
        </div>
      </div>

      {/* Секция с баннерами */}
      <div className="banner-slider">
        <div
          className="banner-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div className="banner" key={index}>
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Секция с новинками */}
      <div className="new-products">
        <h2 className="section-title">Новинки</h2>
        <div className="products-container">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => openModal(product)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedProduct.name}</h3>
            <div className="modal-images">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
            <div className="size-selector">
              <p>Выберите размер:</p>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Выберите</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="modal-buttons">
              <button
                onClick={() => handleAddToCartOrFavorites('Товар в корзину')}
              >
                Добавить в корзину
              </button>
              <button
                onClick={() => handleAddToCartOrFavorites('Избранное')}
              >
                Добавить в избранное
              </button>
            </div>
            <button className="close-modal" onClick={closeModal}>
              ✖ Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
