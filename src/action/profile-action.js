import superagent from 'superagent';
import * as socketActions from './socket-action.js';
import * as requestActions from './request-action.js';
import * as contactActions from './contact';
import * as convoActions from './convo-action';



export const createProfile = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile
});

export const updateProfile = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile
});

export const deleteProfile = () => ({
  type: 'PROFILE_DELETE'
});

export const profileGet = () => (dispatch, getState) => {
  let {token} = getState();

  return superagent(`${__API_URL__}/api/profile`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    dispatch(createProfile(res.body));
    dispatch(requestActions.fetchRequests(res.body.requests, res.body));
    dispatch(contactActions.contactFetch(res.body.contacts));
    dispatch(convoActions.convoFetch(res.body.convos));
    dispatch(socketActions.connectSocket(res.body));
    return res;
  });
};

