import * as requestActions from '../action/request-action.js';


module.exports = (socket, getState, dispatch) => {
  let {profile} = getState();

  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request));
  });


  return socket;
}
