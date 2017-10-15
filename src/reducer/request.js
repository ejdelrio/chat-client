let initState = {
  sent: {
    pending: [],
    accepted: [],
    rejected: []
  },
  received: {
    pending: [],
    accepted: [],
    rejected: []
  }
};


module.exports = (state=initState, action) => {
  let {type, payload, profile} = action;

  switch(type) {
    case 'REQUEST_FETCH':

     return payload;

    case 'REQUEST_CREATE':

      let status = profile.userName === payload.from ? 'sent' : 'received';
      let newStateObj = {...state[status]};
      newStateObj[payload.status].push(payload);
      return {...state, [status]: newStateObj};

    case 'REQUEST_UPDATE':

      let reqType = profile.userName === payload.from ? 'sent' : 'received';
      let newState = {...state};

      let sentPendingArray = newState[reqType]['pending']
      newState[reqType][payload.status].push(payload);
      newState[reqType]['pending'] = sentPendingArray.filter(val => val._id !== payload._id);

      return newState;

    default:

      return state;
  }

}
