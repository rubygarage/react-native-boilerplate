import * as selectors from '../selectors';

describe('Application selectors', () => {
  describe('isOnboardingCompletedSelector', () => {
    it('returns true', () => {
      const state = {
        application: {
          onboarding: true,
        },
      };
      expect(selectors.isOnboardingCompletedSelector(state)).toBeTruthy();
    });
  });
});
