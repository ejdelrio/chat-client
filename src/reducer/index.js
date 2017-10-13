import {combineReducers} from 'redux';
import token from './auth.js';
import profile from './profile.js';
import socket from './socket.js';



module.exports = combineReducers({
  token,
  profile,
  socket,
});
