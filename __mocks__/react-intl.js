import React from 'react';

import intl from 'utils/testHelpers/testIntl';

const Intl = jest.genMockFromModule('react-intl');

Intl.injectIntl = (Node) => {
  const renderWrapped = (props) => (
    <Node
      {...props}
      intl={intl}
    />
  );
  renderWrapped.displayName = Node.displayName || Node.name || 'Component';
  return renderWrapped;
};

Intl.useIntl = () => intl;

module.exports = Intl;
