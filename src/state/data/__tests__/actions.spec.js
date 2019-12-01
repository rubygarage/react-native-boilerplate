import {
  dataApiRequest,
  dataApiSuccess,
  dataApiFailure,
  dataDelete,
} from '../actions';

it('dataApiRequest', () => {
  const endpoint = '/test';
  const expectedAction = { type: 'DATA_API_REQUEST', endpoint };

  expect(dataApiRequest({ endpoint })).toEqual(expectedAction);
});

it('dataApiSuccess', () => {
  const endpoint = '/test';
  const response = { id: '1' };
  const expectedAction = { type: 'DATA_API_SUCCESS', endpoint, response };

  expect(dataApiSuccess({ endpoint, response })).toEqual(expectedAction);
});

it('dataApiFailure', () => {
  const endpoint = '/test';
  const expectedAction = { type: 'DATA_API_FAILURE', endpoint };

  expect(dataApiFailure({ endpoint })).toEqual(expectedAction);
});

it('dataDelete', () => {
  const kind = 'stores';
  const ids = ['1', '2'];
  const expectedAction = { type: 'DATA_DELETE', kind, ids };

  expect(dataDelete({ kind, ids })).toEqual(expectedAction);
});
