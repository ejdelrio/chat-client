import ProfileTrie from '../lib/profileTrie';
let initState = new ProfileTrie();
console.log('TRIE:', initState);

module.exports = (state=initState, action) => {
  let {type, payload} = action;

  switch (type) {

    case 'CONTACT_FETCH':

      let newState = state.clone();
      payload.forEach(contact => {
        newState.loadUser(contact)
      })
      return newState;

    case 'CONTACT_CREATE':

      newState = state.clone();
      newState.loadUser(payload);
      return newState;

    default:

      return state;
  }
};