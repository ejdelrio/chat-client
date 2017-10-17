module.exports = (state={}, action) => {
  let {type, payload, profile} = action;

  switch (type) {
    case 'REQUEST_FETCH':

      let {pending} = payload.sent;
      return pending.reduce((hash, req) => {
        hash[req.to] = req;
        return hash;
      }, {});

    case 'REQUEST_CREATE':

      return payload.from !== profile.userName ? state : {...state, [payload.to] : payload};

    case 'REQUEST_UPDATE':

      let newState = {...state};
      payload.from === profile.userName ? delete newState[payload.to] : null;
      return newState;

    default:

      return state;

  }
};