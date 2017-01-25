// @flow
import React, { Component } from 'react';
import styles from './GamesCollectionComponent.css';
import GridItemComponent from './GridItemComponent';

const GamesCollectionComponent = ({collection, selected, onSelect}) => {
  return (
    <div className={styles.flexgrid}>
      {collection.map(function(game, i){
        return <GridItemComponent item={game} selected={selected === i} onSelectSelf={ () => {onSelect(0)} } key={i} />;
      })}
    </div>
  );
}

export default GamesCollectionComponent;