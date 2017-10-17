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
    dispatch(updateRequest(request, profile));
    return res;
  })
}

export const acceptRequest = request => (dispatch, getState) => {
  let {token, profile} = getState();

  return superagent.put(`${__API_URL__}/api/friendrequest/accept/`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    dispatch(updateRequest(request, profile));
    return res;
  })
}

export const sendRequest = request => (dispatch, getState) => {
  let {token, profile, socket} = getState();

  return superagent.post(`${__API_URL__}/api/friendrequest`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {

    socket.on(`${res.body._id}-updateRequest`, item => {
      dispatch(updateRequest(item, profile));
    });

    dispatch(createRequest(res.body, profile));
    return res;
  });
}

export const removeRequest = request => (dispatch, getState) => {
  let {token, profile} = getState();

  return superagent.delete(`${__API_URL__}/api/deleterequest`)
  .set('Authorization', `Bearer ${token}`)
  .send(request)
  .then(res => {
    dispatch(deleteRequest(res.body, profile));
    return res;
  })
}
