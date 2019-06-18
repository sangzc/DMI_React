/* eslint-disable react/prop-types */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import { getColorsRequest } from './actionCreators';
import {
  makeSelectAllColors,
  makeSelectInitialLoad,
  makeSelectIsLoading,
} from './selectors';
import ColorItem from '../../components/ColorItem/index';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  componentDidMount() {
    if (this.props.initialLoad) {
      this.props.getColorsRequest();
    }
  }

  render() {
    const listOfColors = this.props.colors ? (
      this.props.colors.map(c => <ColorItem key={uuid()} inputColor={c} />)
    ) : (
      <li />
    );

    const render = this.props.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ul>{listOfColors}</ul>
      </>
    );

    return render;
  }
}

const mapStateToProps = createStructuredSelector({
  colors: makeSelectAllColors(),
  isLoading: makeSelectIsLoading(),
  initialLoad: makeSelectInitialLoad(),
});

const mapDispatchToProps = {
  getColorsRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(HomePage);
