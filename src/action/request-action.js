import superagent from 'superagent';


export const fetchRequests = (requests, profile) => ({
  type: 'REQUEST_FETCH',
  payload: requests,
  profile
})
export const createRequest = (request, profile) => ({
  type: 'REQUEST_CREATE',
  payload: request,
  profile
})

export const deleteRequest = (request, profile) => ({
  type: 'REQUEST_DELETE',
  payload: request,
  profile
})
export const updateRequest = (request, profile) => ({
  type: 'REQUEST_UPDATE',
  payload: request,
  profile
})

export const rejectRequest = request => (dispatch, getState) => {
  let {token, profile} = getState();

  return superagent.put(`${__API_URL__}/api/friendrequest/reject/`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    dispatch(deleteRequest(request, profile));
    return res;
  })
}

export const acceptRequest = request => (dispatch, getState) => {
  let {token, profile} = getState();

  return superagent.put(`${__API_URL__}/api/friendrequest/accept/${request._id}`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    return res;
  })
}

export const sendRequest = request => (dispatch, getState) => {
  let {token, profile} = getState();

  return superagent.post(`${__API_URL__}/api/friendrequest`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    dispatch(createRequest(res.body, profile));
    return res;
  });
}
