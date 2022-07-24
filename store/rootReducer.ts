import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import addtask from './addtask/reducer';

export default combineReducers({
    auth,
    user,
    addtask
});
