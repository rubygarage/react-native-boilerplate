import React from 'react';
import PropTypes from 'prop-types';

import Flash from './Flash';
import * as S from './styled';
import useContainer from './hook';

const keyExtractor = (item) => item.id;

const FlashRootComponent = ({ topInset }) => {
  const { flashes, doAnimation } = useContainer();

  return (
    <S.List
      data={flashes}
      renderItem={({ item }) => <Flash {...item} doAnimation={doAnimation} />}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      topInset={topInset}
    />
  );
};

FlashRootComponent.propTypes = {
  topInset: PropTypes.number,
};

FlashRootComponent.defaultProps = {
  topInset: 0,
};

export default FlashRootComponent;
