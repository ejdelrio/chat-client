import './_header-bar.scss';
import React from 'react';

import * as SVG from '../svgs';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render() {
    return(
      <section id='header-bar'>
        <div></div>
        <section>
          <div>{SVG.lens('')}</div>
          <input
            type='text'
            name='search'
            placeholder='Search'
            value={this.state.search}
          />
        </section>
        {SVG.compose('new-message')}
      </section>
    )
  }
}

export default HeaderBar;
