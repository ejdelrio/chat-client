module.exports = (state={}, action) => {
  let{type, payload} = action;

  switch(type) {
    case 'CONVO_FETCH':
      let newState = {};
      payload.forEach(node => newState[node._id] = node.messages);
      return newState;
    case 'CONVO_UPDATE':

      return {...state, [payload._id]: payload.messages};

    default:
      return state;
  }
}