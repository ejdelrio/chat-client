import superagent from 'superagent';

export const convoFetch = payload => ({
  type: 'CONVO_FETCH',
  payload
})


export const createConvo = payload => ({
  type: 'CONVO_CREATE',
  payload
});

export const upDateConvo = payload => ({
  type: 'CONVO_UPDATE',
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
    dispatch(createConvo(res.body))
    return res;
  });
};

export const postMessage = message => (dispatch, getState) => {
  let {token} = getState();

  return superagent.post(`${__API_URL__}/api/new-message`)
  .set('Authorization', `Bearer ${token}`)
  .send(message)
  .then(res => {
    dispatch(upDateConvo(res.body));
    return res;
  });
};