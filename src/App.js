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
      menuMakanan: [
        {
          nama: 'Ayam Bakar',
          harga: 25000,
          stock: 10
        },
        {
          nama: 'Nasi Goreng',
          harga: 22000,
          stock: 0
        }
      ]
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
      <div className='App'>
        <h1>Cafe dan Resto {this.state.namaResto}</h1>
        <button className='btn btn-primary' onClick={() => this.handleGantiNama ('Cipedes')}>Ganti Nama Resto</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan 
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan 
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />

        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={15000} />
        <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={20000} />
      </div>
    );
  }
}

export default App;
