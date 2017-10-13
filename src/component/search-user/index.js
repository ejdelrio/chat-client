import './_search-user.scss';
import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';

import * as SVG from '../svgs';

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
          return(
            <li key={ind}>
              <div></div>
              <p>{ele.userName}</p>
              <button>+</button>
            </li>
          )
        })}
        </ul>
      </section>
    )
  }
}
let mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, undefined)(SearchUser);
