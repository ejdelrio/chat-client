const ProfileTrie = modules.export = function() {
  this.children = {};
};

const Node = function(char) {
  this.val = char;
  this.profile = null;
  this.children = {};
};

ProfileTrie.prototype.loadUser = function(profile) {
  if(!profile) return console.error('No profile was passed.');
  let {userName} = profile;
  if(!userName) return console.error('No username exists.');
  if(!this.children[userName[0]]) this.children[userName[0]] = new Node(userName[0]);

  let _addUserName = (node, ind) => {
    let char = userName[ind];

    if (node.children[char]) {
      return !userName[ind + 1] ?
      node.children[char].profile = profile:
      _addUserName(node.children[char], ind + 1);
    }

    node.children[char] = new Node(char);

    return !userName[ind + 1] ?
    node.children[char].profile = profile:
    _addUserName(node.children[char], ind + 1);
  };

  return _addUserName(this.children[userName[0]], 1);
};

ProfileTrie.prototype.searchUsers = function(userName) {
  if (!userName) console.error('User name required.');
  if (typeof userName !== 'string') console.error('Input must be a string');

  let firstChar = userName[0];
  let output = [];
  if (!this.children[firstChar]) return output;

  let _searchUsers = (node, ind) => {
    let {children} = node;
    let nextChar = userName[ind + 1];
    let childrenLength = Object.keys(children).length;

    if (nextChar && !children[nextChar]) return output;
    if (children[nextChar]) return _searchUsers(children[nextChar], ind + 1);
    if (node.profile) output.push(node.profile);
    if (childrenLength === 0) return output;

    for (let child in children) {
      _searchUsers(children[child], ind + 1);
    }

    return output;
  };

  return _searchUsers(this.children[firstChar], 1);
};