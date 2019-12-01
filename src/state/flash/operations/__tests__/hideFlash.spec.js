import hideFlash from '../hideFlash';
import { removeFlash } from '../../actions';
import { flashSelector } from '../../selectors';

jest.mock('../../selectors', () => ({
  flashSelector: jest.fn(),
}));

describe('hideFlash', () => {
  const id = 300;
  const action = { id };
  const getState = jest.fn();
  const dispatch = jest.fn();
  const done = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has valid attributes', () => {
    expect(hideFlash).toMatchSnapshot();
  });

  it('dispatches "removeFlash" action', () => {
    const isSingleShot = true;
    const flash = { id, isSingleShot };
    flashSelector.mockReturnValueOnce(flash);
    hideFlash.process({ action, getState }, dispatch, done);

    expect(dispatch).toHaveBeenCalledWith(removeFlash(id, isSingleShot));
    expect(done).toHaveBeenCalled();
  });

  it('does not dispatch "removeFlash" action', () => {
    flashSelector.mockReturnValueOnce(undefined);
    hideFlash.process({ action, getState }, dispatch, done);

    expect(dispatch).not.toHaveBeenCalled();
    expect(done).toHaveBeenCalled();
  });
});
