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
      namaPembeli: '',
      keterangan: '',
      jenisPembayaran: '',
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

  handleChange = (event) => {
    var name = event.target.name
    var value = event.target.value

    this.setState({ [name]: value })
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

        <div className="row" style={{marginTop: '10px'}}>
          <div className='col-md-4 offset-md-4'>
            <form>
              <div className='form-group'>
                <label>Nama pembeli:</label>
                <input className='form-control'
                  name="namaPembeli"
                  onChange={this.handleChange}
                  value={this.state.namaPembeli} />
                <small>Nama pembeli: {this.state.namaPembeli}</small>
              </div>
              <div className='form-group'>
                <label>Keterangan</label>
                <textarea className='form-control'
                  name='keterangan'
                  onChange={this.handleChange}
                  value={this.state.keterangan}></textarea>
                <small>Keterangan: {this.state.keterangan}</small>
              </div>
              <div className='form-group'>
                <label>Jenis Pembayaran</label>
                <select className='form-control'
                  name='jenisPembayaran'
                  value={this.state.value}
                  onChange={this.handleChange}>
                    <option value="">-- Pilih --</option>
                    <option value="cash">Cash</option>
                    <option value="kartuKredit">Kartu Kredit</option>
                    <option value="voucher">Voucher</option>
                  </select>
                  <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
              </div>
            </form>
          </div>
        </div>

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
