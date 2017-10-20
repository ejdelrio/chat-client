import './_home.scss';
import React from 'react';

import HeaderBar from '../header-bar';
import Conversations from '../conversations';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <section id='home'>
        <HeaderBar
          compose={this.props.compose}
          profileClick={this.props.profileClick}
        />
        <Conversations
          nodeClick={this.props.compose}
        />
      </section>
    )
  }
}

export default Home;
