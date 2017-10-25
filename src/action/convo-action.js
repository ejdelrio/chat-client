import superagent from 'superagent';

export const convoFetch = payload => ({
  type: 'CONVO_FETCH',
  payload
});

export const createConvo = payload => ({
  type: 'CONVO_CREATE',
  payload
});

export const upDateConvo = payload => ({
  type: 'CONVO_UPDATE',
  payload
});

export const readConvo = payload => ({
  type: 'CONVO_READ',
  payload
});

export const deleteConvo = payload => ({
  type: 'CONVO_DELETE',
  payload
});

export const postConvo = convoPackage => (dispatch, getState) => {
  let {token} = getState();

  return superagent.post(`${__API_URL__}/api/new-conversation`)
  .set('Authorization', `Bearer ${token}`)
  .send(convoPackage)
  .then(res => {
    return res.body;
  });
};

export const postMessage = message => (dispatch, getState) => {
  let {token} = getState();

  return superagent.post(`${__API_URL__}/api/new-message`)
  .set('Authorization', `Bearer ${token}`)
  .send(message)
  .then(res => {
    dispatch(upDateConvo(res.body));
    return res.body;
  });
};

export const readConvo = node => (dispatch, getState) => {
  let {token} = getState();

  return superagent.put(`${__API_URL__}/api/read-convo/${node._id}`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    dispatch(readConvo(res.body));
    return res;
  })
}