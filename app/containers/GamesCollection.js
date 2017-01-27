// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GamesCollectionComponent from '../components/GamesCollectionComponent';
import { callGameSelect } from '../actions';

const mapStateToProps = (state) => {
  return {
    collection: state.collectionState.items,
    selectedItem: state.collectionState.selectedItem,
    accentColor: state.themeState.accentColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (index) => {
      dispatch(callGameSelect(index));
    }
  }
}

const GamesCollection = connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesCollectionComponent)

export default GamesCollection;