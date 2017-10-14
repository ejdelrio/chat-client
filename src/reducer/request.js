let initState = {
  sent: [],
  recieved: []
};


module.exports = (state=initState, action) => {
  let {type, payload, profile} = action;

  switch(type) {
    case 'REQUEST_FETCH':

      let newState = {...state};
      return payload.reduce((obj, request) => {
        let {from, status} = request;
        status.from === profile.userName ? obj.sent.push(request) : obj.recieved.push(request);
        return obj;
      }, newState);

    case 'REQUEST_CREATE':
      let newArray = [...state[payload.status], payload];
      return {...state, [payload.status]: newArray};
    default:
      return state;
  }

}
