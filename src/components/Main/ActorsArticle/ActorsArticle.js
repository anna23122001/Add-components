import React, { Component } from 'react'
import './ActorsArticle.css'
import { nanoid } from 'nanoid';

export class ActorsArticle extends Component {
  render() {
    const {actors} = this.props;
    return (
      <>
      <h2>Список актеров</h2>
     <div className='actors-list-container'>
      {actors.map((actor) => {
        return (
          <p key={nanoid()} className='actors-list'>{actor}</p>
        )
      })}
     </div>
      </>
    )
  }
}

export default ActorsArticle