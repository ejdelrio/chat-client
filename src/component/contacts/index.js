import './_contacts.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as SVG from '../svgs';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentQuery: '',
      queryResults: Object.values(this.props.contactHash)
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;

    let trieResults = value ?
    this.props.contactTrie.searchUsers(value):
    Object.values(this.props.contactHash);

    this.setState({
      [name]: value,
      queryResults: trieResults
    });
  }





  render() {
    return(
      <section id='contacts'>
        <div>
          <div>
            <div>{SVG.lens('')}</div>
            <input
              type={'text'}
              name={'currentQuery'}
              placeholder={'Search'}
              value={this.state.currentQuery}
              onChange={this.onChange}
            />
          </div>
        </div>
        <ul>
          {this.state.queryResults.map((val, ind) => {
            return(
              <li key={ind}>
                <p>{val.userName}</p>
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
  contacts: state.contacts,
  contactHash: state.contactHash,
  contactTrie: state.contactTrie
})

let mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);