import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { grid } from './grid';
import { list } from './list';
import { signUp } from './signUp';
import { signIn } from './signIn';
import { teamPlayers } from './teamPlayers';
import { editPlayer } from './editPlayer';
import { notify } from './notify';
import { account } from './account';


export const rootReducer = combineReducers({
  form: formReducer,
  grid,
  list,
  signIn,
  signUp,
  teamPlayers,
  editPlayer,
  notify,
  account,
});

export default rootReducer;
