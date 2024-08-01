import React from 'react';
import './App.css';

const CityInfo = () => {
  return (
    <div className="city-info">
      <h1>Рівне</h1>
      <h2>Україна</h2>
      <p>Рік заснування: 1283</p>
      <div className="photos">
        <img src="https://upload.wikimedia.org/wikipedia/uk/4/4d/%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA_%D0%A2%D0%B0%D1%80%D0%B0%D1%81%D0%BE%D0%B2%D1%96_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D1%83_%D0%B2_%D0%A0%D1%96%D0%B2%D0%BD%D0%BE%D0%BC%D1%83_%282%29.jpg" alt="Пам'ятник Шевченку" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/%D0%A0%D0%BE%D0%B2%D0%BD%D0%BE._%D0%9F%D0%B0%D1%80%D0%BA_%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE..JPG" alt="Парк у Рівному" />
        <img src="https://internet-bilet.ua/images/room_header_photo/size3/hph_1487777388_58adae6c43b0d." alt="Театр у Рівному" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CityInfo />
    </div>
  );
}

export default App;
