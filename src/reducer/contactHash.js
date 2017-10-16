module.exports = (state={}, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CONTACT_FETCH':

      let newState = {...state};
      payload.forEach(val => {
        newState[val.userName] = val;
      });
      return newState;

    case 'CONTACT_CREATE':

      newState = {...state};
      newState[payload.userName] = payload;
      return newState;

    default:

      return state;
  }
}