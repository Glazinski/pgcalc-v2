import { TOGGLE_SUBJECT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SUBJECT:
      return { ...state, [action.payload.subjId]: action.payload.config };

    default:
      return state;
  }
};
