//Import all the reducers  and export them in one variable

import value from './value';
import students from './students';
import { combineReducers } from 'redux';
const reducer = combineReducers({ value, students});

export default reducer;