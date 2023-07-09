import React, { Component } from 'react'
import './ActorsArticle.css'

export class ActorsArticle extends Component {
  render() {
    const {actors} = this.props;
    return (
      <>
      <h2>Список актеров</h2>
     <div className='actors-list-container'>
      {this.props.actors.map((actor) => {
        return (
          <p key={actor} className='actors-list'>{actor}</p>
        )
      })}
     </div>
      </>
    )
  }
}

export default ActorsArticle