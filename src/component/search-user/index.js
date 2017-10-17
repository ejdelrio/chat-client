import './_search-user.scss';
import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';

import * as SVG from '../svgs';
import * as requestActions from '../../action/request-action.js';
import * as util from '../../lib/util.js';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      queryResults: []
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;
    return Promise.resolve(
      this.setState({
        [name]: value
      })
    )
    .then(() => {
      if(!value) return this.setState({queryResults: []});
      return superagent.get(`${__API_URL__}/api/profile-query/${value}`)
      .set('Authorization', `Bearer ${this.props.token}`)
      .then(res => {
        this.setState({queryResults: res.body});
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <section id='search-user'>
        <div>
          <div>
            <div>{SVG.lens('')}</div>
            <input
              type='text'
              name='query'
              placeholder='Search'
              value={this.state.query}
              onChange={this.onChange}
            />
          </div>
        </div>
        <ul>
        {this.state.queryResults.map((ele, ind) => {
          let isContact = this.props.contacts[ele.userName];
          let hasRequest = this.props.requestHash[ele.userName];
          console.log('HAS_REQUEST', hasRequest);
          console.log('IS_CONTAcT', isContact);

          return(
            <li key={ind}>
              <div></div>
              <p>{ele.userName}</p>
              {util.renderIf(!(isContact || hasRequest),

                <button onClick={() => this.props.sendRequest(ele)}>
                  +
                </button>

              )}
            </li>
          )
        })}
        </ul>
      </section>
    )
  }
}
let mapStateToProps = state => ({
  token: state.token,
  contacts: state.contactHash,
  requestHash: state.requestHash
})

let mapDispatchToProps = dispatch => ({
  sendRequest: profile => dispatch(requestActions.sendRequest(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
