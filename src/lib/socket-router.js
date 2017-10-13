import requestActions from '../action/request-action.js';


module.exports = (socket, getState, dispatch) => {
  let {porifle} = getState();
  
  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request));
  });





  return socket;
}
