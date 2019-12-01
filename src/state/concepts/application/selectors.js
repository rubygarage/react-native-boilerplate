import { path } from 'ramda';

export const isOnboardingCompletedSelector = path(['application', 'onboarding']);

export const isConnectedSelector = path(['application', 'connection']);
