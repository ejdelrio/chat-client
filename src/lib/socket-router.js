import * as requestActions from '../action/request-action.js';


module.exports = (socket, getState, dispatch) => {
  let {profile, requests} = getState();

  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request, profile));
  });


  let {sent, received} = requests;

  for (let ind in sent.pending) {
    let contactReq = sent.pending[i];
    socket.on(`${contactReq._id}-updateRequest`, request => {
      dispatch(requestActions.updateRequest(request, profile));
    });
  }





  return socket;
}
