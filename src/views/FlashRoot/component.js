import React from 'react';
import PropTypes from 'prop-types';

import Flash from './Flash';
import * as S from './styled';

const keyExtractor = (item) => item.id;

const FlashRootComponent = ({ flashes, doAnimation, topInset }) => (
  <S.List
    data={flashes}
    renderItem={({ item }) => <Flash {...item} doAnimation={doAnimation} />}
    keyExtractor={keyExtractor}
    showsVerticalScrollIndicator={false}
    topInset={topInset}
  />
);

FlashRootComponent.propTypes = {
  flashes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  doAnimation: PropTypes.func.isRequired,
  topInset: PropTypes.number,
};

FlashRootComponent.defaultProps = {
  topInset: 0,
};

export default FlashRootComponent;
