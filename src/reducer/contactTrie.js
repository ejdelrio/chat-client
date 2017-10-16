import ProfileTrie from '../lib/profileTrie';
let initState = new ProfileTrie();

module.exports = (state=initState, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CONTACT_CREATE':

      let newState = {...state};
      newState.loadUser(payload);
      return newState;

    default:

      return state;
  }
};