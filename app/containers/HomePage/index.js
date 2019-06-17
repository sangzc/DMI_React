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
import { getColorsRequest } from './actionCreators';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getColorsRequest();
  }

  render() {
    const listOfColors = this.props.colors 
      ? this.props.colors.map(c => <li>{c}</li>)
      : <li></li>
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
  return { colors: state.home };
}

const mapDispatchToProps = {
  getColorsRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(HomePage);
