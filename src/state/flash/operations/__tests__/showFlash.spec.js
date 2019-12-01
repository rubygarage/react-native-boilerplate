import showFlash from '../showFlash';
import { addFlash } from '../../actions';
import { viewedIdsSelector } from '../../selectors';

jest.mock('../../selectors', () => ({
  viewedIdsSelector: jest.fn(() => []),
}));

describe('showFlash', () => {
  const flash = { id: '300' };
  const action = { flash };
  const getState = jest.fn();
  const dispatch = jest.fn();
  const done = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has valid attributes', () => {
    expect(showFlash).toMatchSnapshot();
  });

  it('dispatches "addFlash" action', () => {
    showFlash.process({ action, getState }, dispatch, done);
    expect(dispatch).toHaveBeenCalledWith(addFlash(flash));
    expect(done).toHaveBeenCalled();
  });

  it('does not dispatch "addFlash" action', () => {
    viewedIdsSelector.mockImplementation(() => ['300']);
    showFlash.process({ action, getState }, dispatch, done);
    expect(dispatch).not.toHaveBeenCalled();
    expect(done).toHaveBeenCalled();
  });
});
