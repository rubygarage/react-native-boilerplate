/* eslint-disable import/no-extraneous-dependencies */
import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import enableHooks from 'jest-react-hooks-shallow';

const append = jest.fn();
global.FormData = () => ({ append });

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('', { url: 'https://localhost' });
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });

const MockDate = require('mockdate');

const frameTime = 10;

global.requestAnimationFrame = (cb) => {
  // Default implementation of requestAnimationFrame calls setTimeout(cb, 0),
  // which will result in a cascade of timers - this generally pisses off test runners
  // like Jest who watch the number of timers created and assume an infinite recursion situation
  // if the number gets too large.
  //
  // Setting the timeout simulates a frame every 1/100th of a second
  setTimeout(cb, frameTime);
};

global.timeTravel = (time = frameTime) => {
  const tickTravel = () => {
    // The React Animations module looks at the elapsed time for each frame to calculate its
    // new position
    const now = Date.now();
    MockDate.set(new Date(now + frameTime));

    // Run the timers forward
    jest.advanceTimersByTime(frameTime);
  };

  // Step through each of the frames
  const frames = time / frameTime;
  let framesEllapsed;
  // eslint-disable-next-line no-plusplus
  for (framesEllapsed = 0; framesEllapsed < frames; framesEllapsed++) {
    tickTravel();
  }
};

enableHooks(jest);
