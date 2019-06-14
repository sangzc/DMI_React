/*
 * ColorPage
 *
 * This is one of the pages the user can see in the App, at the '/colors' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ColorPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <form>
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

export default ColorPage;