/*
 * ColorPage
 *
 * This is one of the pages the user can see in the App, at the '/colors' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
