/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
import getColors from './actions';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  async componentDidMount() {
    this.props.getColors();
  }

  render() {
    const listOfColors = this.props.colors.map(c => <li>{c}</li>);
    return (
      <>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ul>{listOfColors}</ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { colors: state.home.colors };
}

const mapDispatchToProps = {
  getColors,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(HomePage);
