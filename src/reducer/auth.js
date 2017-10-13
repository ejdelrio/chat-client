import * as util from '../lib/util.js';

module.exports = (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_DELETE':
      util.deleteCookie('pingme-token')
      return null;
    default:
      return state;
  }
};
