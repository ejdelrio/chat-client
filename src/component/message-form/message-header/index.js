import React from 'react';
import {connect} from 'react-redux';

import * as util from '../../../lib/util.js';

class MessageHeader extends React.Component {

  render() {
    return(
      <div>
        <div>
          <button
            onClick={this.props.close}
          >
            Cancel
          </button>
          <p>Message</p>
        </div>
        {util.renderIf(!this.props.existing,
          <div className={'add-contacts'}>
            <p>To:</p>
            <ul>
              {this.props.members.map((val, ind) => {
                return(
                  <li key={ind}>
                    <p>{val.userName}
                      <span
                        onClick={() => this.props.removeMember(val)}
                      >
                        X
                      </span>
                    </p>
                  </li>
                )
              })}
            </ul>
            <input
              name={'memberSearch'}
              type={'text'}
              placeholder={'Search'}
              value={this.props.memberSearch}
              onChange={this.props.trieQuery}
            />
          </div>
        )}
        {util.renderIf(!this.props.existing,
          <ul>
            {this.props.fuzzySearch.map((profile, ind) => {
              let isNotMember = !this.props.memberHash[profile.userName]
              if (isNotMember) return(
                <li
                  key={ind}
                  onClick={() => this.props.addMember(profile)}
                >
                  <p>{profile.userName}</p>
                </li>
              )
            })}
          </ul>
        )}
        {util.renderIf(this.props.existing,
          <section>
            <p>
              {
                this.props.members.reduce((newArr, val) => {
                  if(val.userName !== this.props.profile.userName) newArr.push(val.userName);
                  return newArr
                }, [])
                .join(', ')
              }
            </p>
          </section>
        )}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  messages: state.messages,
  profile: state.profile
});

export default connect(mapStateToProps, undefined)(MessageHeader);