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

      let type = profile.userName === payload.from ? 'sent' : 'received';
      let newState = {...state};
      newState[type][payload.status].push(payload);

      return {
        ...newState,
        pending: newState[status].pending.filter(req => req._id !== payload._id),
      };

    default:

      return state;
  }

}
