import superagent from 'superagent';
import * as socketActions from './socket-action.js';
import * as requestActions from './request-action.js';



export const createProfile = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile
});

export const updateProfile = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile
})

export const deleteProfile = () => ({
  type: 'PROFILE_DELETE'
})

export const profileGet = () => (dispatch, getState) => {
  let {token} = getState();

  return superagent(`${__API_URL__}/api/profile`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    dispatch(createProfile(res.body));
    dispatch(socketActions.connectSocket(res.body));
    dispatch(requestActions.fetchRequests(res.body.requests, res.body));
    return res;
  })
}
