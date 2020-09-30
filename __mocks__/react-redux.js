import * as reactRedux from 'react-redux';

export const dispatch = jest.fn();

export const useDispatch = jest.fn(() => dispatch);
export const useSelector = jest.fn();
export const { Provider } = reactRedux;
export const { connect } = reactRedux;
