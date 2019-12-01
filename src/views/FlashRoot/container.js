import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UIManager, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';

import { flashesSelector } from 'state/flash/selectors';
import FlashRootComponent from './component';

const ANIMATION_DURATION = 250;

class FlashRoot extends Component {
  componentDidMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidUpdate(prevProps) {
    const { flashes: prevFlashes } = prevProps;
    const { flashes } = this.props;
    if (prevFlashes.length < flashes.length) {
      this.doAnimation();
    }
  }

  doAnimation = () => {
    LayoutAnimation.configureNext({
      duration: ANIMATION_DURATION,
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });
    LayoutAnimation.configureNext({
      duration: ANIMATION_DURATION,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
      },
    });
  };

  render() {
    return (
      <FlashRootComponent
        {...this.props}
        doAnimation={this.doAnimation}
      />
    );
  }
}

FlashRoot.propTypes = {
  flashes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  flashes: flashesSelector(state),
});

export { FlashRoot as FlashRootContainer };
export default connect(mapStateToProps)(FlashRoot);
