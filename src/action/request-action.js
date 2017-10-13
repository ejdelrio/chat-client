import superagent form 'superagent';

export const createRequest = request => ({
  type: 'REQUEST_CREATE',
  payload: request
})

export const deleteRequest = request => ({
  type: 'REQUEST_DELETE'
  payload: request
})

export const rejectRequest = request => (dispatch, getState) => {
  let {token} = getState();

  return superagent.delete(`${__API_URL__}/api/friendrequest`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    dispatch(deleteRequest(request));
    return res;
  })
}

export const acceptRequest = request => (dispatch, getState) => {
  let {token} = getState();

  return superagent.put(`${__API_URL__}/api/friendrequest`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    return res;
  })
}
