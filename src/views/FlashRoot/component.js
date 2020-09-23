import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UIManager } from 'react-native';

import { flashesSelector } from 'state/flash/selectors';

import Flash from './Flash';
import * as S from './styled';
import doAnimationHook from './hooks/doAnimationHook';

const keyExtractor = (item) => item.id;

const FlashRootComponent = ({ topInset }) => {
  const flashes = useSelector(flashesSelector);

  const { doAnimation } = doAnimationHook();

  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    doAnimation();

    // eslint-disable-next-line
  }, [flashes.length]);

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
