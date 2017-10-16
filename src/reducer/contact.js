module.exports = (state=[], action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CONTACT_FETCH':

      return payload;

    case 'CONTACT_CREATE':

      let newState = [...state, payload];
      return newState;

    default:

      return state;
  }
}