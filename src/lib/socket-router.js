import * as requestActions from '../action/request-action.js';
import * as contactActions from '../action/contact';
import * as convoActions from '../action/convo-action';


module.exports = (socket, getState, dispatch) => {
  let {profile, requests, convos} = getState();

  socket.on(`${profile.userName}-newContact`, contact => {
    dispatch(contactActions.createContact(contact));
  })

  socket.on(`${profile.userName}-newRequest`, request => {
    dispatch(requestActions.createRequest(request, profile));
  });


  let {sent, received} = requests;

  for (let ind = 0; ind < sent.pending.length; ind ++) {
    let contactReq = sent.pending[ind];

    socket.on(`${contactReq._id}-updateRequest`, request => {
      dispatch(requestActions.updateRequest(request, profile));
    });
  }

  convos.forEach(node => {

    socket.on(`${node._id}-nodeUpdate`, node => {
      console.log('UPDATED_NODE: ', node);
      dispatch(convoActions.upDateConvo(node));
    })
  })





  return socket;
}
