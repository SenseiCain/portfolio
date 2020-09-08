import { combineReducers } from 'redux';
import blogs from './blogs';
import loading from './loading';

export default combineReducers({  blogs, loading });