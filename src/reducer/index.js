import {combineReducers} from 'redux';
import token from './auth.js';
import profile from './profile.js';
import socket from './socket.js';
import requests from './request.js';
import contactTrie from './contactTrie';
import contactHash from './contactHash';
import contacts from './contact';
import requestHash from './sent-request-hash';
import convos from './convo.js';



module.exports = combineReducers({
  token,
  profile,
  socket,
  requests,
  contactTrie,
  contacts,
  contactHash,
  requestHash,
  convos
});
