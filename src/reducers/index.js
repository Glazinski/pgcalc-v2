import { combineReducers } from 'redux';
import subjectReducer from './subjectReducer';

export default combineReducers({
  subjects: subjectReducer,
});
