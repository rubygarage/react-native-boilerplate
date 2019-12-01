import * as actions from '../actions';

it('showModal', () => {
  const modal = { key: 'CREATE_STORE' };
  const modalProps = { customProp: 'customProp' };
  const expectedAction = { type: 'SHOW_MODAL', modal, modalProps };

  expect(actions.showModal({ modal, modalProps })).toEqual(expectedAction);
});

it('hideModal', () => {
  const expectedAction = { type: 'HIDE_MODAL' };

  expect(actions.hideModal()).toEqual(expectedAction);
});
