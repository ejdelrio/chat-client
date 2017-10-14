import * as requestActions from '../action/request-action.js';


module.exports = (socket, getState, dispatch) => {
  let {profile, requests} = getState();

  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request, profile));
  });

  for (let i = 0; i < requests.sent.length; i++) {
    let contactRequest = requests.sent[i];
    socket.on(`${requests.sent[i]._id}-rejectRequest`, updatedReq => {
      dispatch(requestActions.updatedReq(updatedReq));
    })
  }




  return socket;
}
