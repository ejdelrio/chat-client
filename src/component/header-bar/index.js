import './_header-bar.scss';
import React from 'react';

import * as SVG from '../svgs';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return(
      <section id='header-bar'>
        <div
          onClick={this.props.profileClick}
        >
        </div>
        <section>
          <div>{SVG.lens('')}</div>
          <input
            type='text'
            name='search'
            placeholder='Search'
            value={this.state.search}
            onChange={this.onChange}
          />
        </section>
        {SVG.compose('new-message', this.props.compose)}
      </section>
    )
  }
}

export default HeaderBar;
