import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

export class App extends Component {
  state = {
    actorsArray: ['Джонни Депп',
     'Фредди Хаймор', 
     'Хелена Бонэм Картер',
     'Ноа Тейлор', 
     'Дэвид Келли'],
      infoObject: {
      country: 'USA',
      studio: 'Warner Bros. Pictures',
      genre:'musical fantasy comedy',
      year: '2005',
     }
  }

  render() {
    return (
      <>
       <Header />
       <Main actors={this.state.actorsArray} object={this.state.infoObject}/>
      <Footer/>
      </>
    )
  }
}

export default App


