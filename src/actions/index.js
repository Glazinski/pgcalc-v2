import { TOGGLE_SUBJECT } from './types';

export const toggleSubject = (subjId, config) => ({
  type: TOGGLE_SUBJECT,
  payload: {
    subjId,
    config,
  },
});
