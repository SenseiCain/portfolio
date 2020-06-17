import { combineReducers } from 'redux';
import projects from './projects';
import blogs from './blogs';
import loading from './loading';

export default combineReducers({ projects, blogs, loading });