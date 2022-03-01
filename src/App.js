import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "Codepolitan",
    }
  }

  handleGantiNama = (nama) => {
    this.setState({namaResto: nama})
  }

  render() {
    const mainContentStyle = {
      marginTop: '10px',
      backgroundColor: 'blue',
      border: '1px solid black'
    };

    return (
      <div className='main-content-style'>
        <h1>Cafe dan Resto {this.state.namaResto}</h1>
        <button onClick={() => this.handleGantiNama ('Cipedes')}>Ganti Nama Resto</button>
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
