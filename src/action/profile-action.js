import superagent from 'superagent';
import * as socketActions from './socket-action.js';



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
    dispatch(createProfile(res.body))
    dispatch(socketActions.connectSocket(res.body))
    return res;
  })
}
