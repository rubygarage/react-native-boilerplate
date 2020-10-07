import { act } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';

import renderHookWithProviders from 'utils/testHelpers/renderHookWithProviders';
import { hideModal } from 'state/modal/actions';
import { dispatch } from 'mocks/react-redux';

import useContainer from '../hook';

describe('ModalRoot useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    useSelector.mockReturnValue({});
    ({ result } = renderHookWithProviders(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('checks onActionRendered method', () => {
    act(() => {
      result.current.onCloseModal();
    });

    expect(result.current.isVisible).toBe(false);
  });

  it('checks onDestroyModal method', () => {
    act(() => {
      result.current.onDestroyModal();
    });

    expect(result.current.isVisible).toBe(true);
    expect(dispatch).toHaveBeenCalledWith(hideModal());
  });
});
