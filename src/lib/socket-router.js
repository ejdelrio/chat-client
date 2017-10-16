import * as requestActions from '../action/request-action.js';


module.exports = (socket, getState, dispatch) => {
  let {profile, requests} = getState();

  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request, profile));
  });


  let {sent, received} = requests;

  for (let ind = 0; ind < sent.pending.length; ind ++) {
    let contactReq = sent.pending[ind];
    console.log('__SOCKET_LOOP__:', contactReq);
    socket.on(`${contactReq._id}-updateRequest`, request => {
      dispatch(requestActions.updateRequest(request, profile));
    });
  }





  return socket;
}
