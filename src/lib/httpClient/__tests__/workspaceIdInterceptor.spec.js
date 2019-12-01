import { API_HOST } from 'react-native-dotenv';

import workspaceIdInterceptor from '../workspaceIdInterceptor';

const mockWorkspaceId = '301';
jest.mock('state/concepts/session/selectors', () => ({
  tokensSelector: jest.fn(() => ({
    workspaceId: mockWorkspaceId,
  })),
}));

describe('workspaceIdInterceptor()', () => {
  const store = {
    getState: jest.fn(),
  };
  const config = {
    baseURL: '',
  };

  it('correctly assigns baseURL', () => {
    const modifiedConfig = workspaceIdInterceptor(store)(config);

    expect(modifiedConfig.baseURL).toEqual(`${API_HOST}/api/v1/workspaces/${mockWorkspaceId}`);
  });
});
