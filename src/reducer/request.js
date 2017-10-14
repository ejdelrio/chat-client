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
        from === profile.userName ? obj.sent.push(request) : obj.recieved.push(request);
        return obj;
      }, newState);

    case 'REQUEST_CREATE':
    console.log(profile.userName);
      let status = profile.userName === payload.from ? 'sent' : 'recieved';
      let newArray = [...state[status], payload];
      return {...state, [status]: newArray};
    case 'REEQUEST_UPDATE':
      let status = profile.userName === payload.from ? 'sent' : 'recieved':
      let newArr = state[status].map((obj, ind) => {
        return obj._id === payload._id ? payload : obj;
      });
      return {...state, [status]: newArr};
    default:
      return state;
  }

}
