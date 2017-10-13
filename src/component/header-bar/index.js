import './_header-bar.scss';
import React from 'react';

import * as SVG from '../svgs';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <section id='header-bar'>
        <div></div>
        {SVG.compose('new-message')}
      </section>
    )
  }
}

export default HeaderBar;
