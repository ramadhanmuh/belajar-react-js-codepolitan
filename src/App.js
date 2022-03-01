import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Cafe dan Resto Codepolitan</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000} />
        <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={22000} />
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={15000} />
        <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={20000} />
      </div>
    );
  }
}

export default App;
