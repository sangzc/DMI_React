/*
 * ColorPage
 *
 * This is one of the pages the user can see in the App, at the '/colors' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import messages from './messages';
import { addColorRequest } from './actionCreators';

class ColorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // send request to backend to add new color
    this.props.addColorRequest(this.state.color);
    // go to homepage
    this.props.history.push('/');
  }

  render() {
    return (
      <>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  addColorRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(ColorPage);
