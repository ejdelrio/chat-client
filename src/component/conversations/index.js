import './_conversations.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as util from '../../lib/util.js';

class Conversations extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <section id={'conversations'}>
        <ul>
          {this.props.convos.map((node, ind) => {
            return(
              <li
                key={ind}
                onClick={() => this.props.nodeClick(node.members, true, node)}
              >
                <p>
                  {
                    node.members.reduce ((newArr, val) => {
                      if (val.userName !== this.props.profile.userName) newArr.push (val.userName);
                      return newArr
                    }, []).join (', ')
                  }
                </p>
                {util.renderIf(node.unread, <p>{node.unread}</p>)}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  convos: state.convos
});

let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);