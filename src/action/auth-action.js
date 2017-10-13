import superagent from 'superagent';
import * as util from '../lib/util.js';


export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token
});

export const tokenDelete = () => {
  return {type: 'TOKEN_DELETE'};
};

export const login = user => dispatch => {
  let {userName, passWord} = user;
  return superagent.get(`${__API_URL__}/api/login`)
  .auth(userName, passWord)
  .then(res => {
    util.createCookie('pingme-token', res.text, 1);
    dispatch(tokenSet(JSON.parse(res.text)));
    return res;
  })
}

export const signup = user => dispatch => {
  return superagent.post(`${__API_URL__}/api/signup`)
  .send(user)
  .then(res => {
    util.createCookie('pingme-token', res.text, 1);
    dispatch(tokenSet(JSON.parse(res.text)));
    return res;
  })
}
