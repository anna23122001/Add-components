import React, { Component } from 'react'
import './InfoArticle.css'
export class InfoArticle extends Component {
  render() {
    const {object} = this.props;
    return (
      <>
<h2>Дополнительная информация</h2>
        <p className='extra-info'>Страна: {object.country}</p>
        <p className='extra-info'>Студия: {object.studio}</p>
        <p className='extra-info'>Жанр: {object.genre}</p>
        <p className='extra-info'>Год выпуска: {object.year}</p>
      </>
    )
  }
}

export default InfoArticle