import React, { Component } from 'react'
import ActorsArticle from './ActorsArticle/ActorsArticle'
import PlotArticle from './PlotArticle/PlotArticle'
import InfoArticle from './InfoArticle/InfoArticle'


export class Main extends Component {
  
  render() {
    const { actors, object } = this.props;
    return ( 
      <>
      <PlotArticle/>
      <ActorsArticle actors={actors}/>
      <InfoArticle object={object}/>
      </>
    )
  }
}

export default Main
