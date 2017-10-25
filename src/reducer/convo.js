import sound from './ring.mp3';
let notification = new Audio(sound);

module.exports = (state=[], action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CONVO_FETCH':

      return payload;

    case 'CONVO_CREATE':

      return [...state, payload];

    case 'CONVO_READ':
      return state.map(val => { return val._id === payload._id ? payload: val});

    case 'CONVO_UPDATE':
      notification.play();
      return state.map(val => { return val._id === payload._id ? payload: val});

    case 'CONVO_DELETE':

      return state.filter(val => val._id !== payload._id);

    default:

      return state;
  }
};