import React, { Component } from 'react'
import './Header.css';

import MyImage from './chocolate-factory.jpg';
export class Header extends Component {

  render() {
    return (
      <>
      <h1>Чарли и шоколадная фабрика</h1>
    <div className='img-container'>
      <img src={MyImage} alt='Movie image' className='my-image'/>
    </div>
      </>
    )
  }
}

export default Header