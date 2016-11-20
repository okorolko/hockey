import { combineReducers } from 'redux';
import { grid } from './grid';
import { list } from './list';



export const rootReducer = combineReducers({
  grid,
	list
});

export default rootReducer;
