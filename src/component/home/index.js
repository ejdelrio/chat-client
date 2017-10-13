import './_home.scss';
import React from 'react';

import HeaderBar from '../header-bar';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <section id='home'>
        <HeaderBar
          profileClick={this.props.profileClick}
        />
      </section>
    )
  }
}

export default Home;
