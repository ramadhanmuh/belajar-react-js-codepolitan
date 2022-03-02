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
      ],
      menuMinuman: [
        {
          id: 1,
          nama: 'Juice Melon',
          harga: 20000
        },
        {
          id: 2,
          nama: 'Milkshake Strawberry',
          harga: 15000
        },
        {
          id: 3,
          nama: 'Juice Tomat',
          harga: 15000
        },
        {
          id: 4,
          nama: 'Juice Mangga',
          harga: 15000
        },
        {
          id: 5,
          nama: 'Juice Alpukat',
          harga: 15000
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
        { this.state.menuMinuman.map((menu, index) => 
          <MenuMinuman key={menu.id} namaMenu={menu.harga} hargaMenu={menu.harga} />
          )}
      </div>
    );
  }
}

export default App;
