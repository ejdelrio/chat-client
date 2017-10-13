import './_requests.scss';
import React from 'react';
import {connect} from 'react-redux';

class Requests extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section id='requests'>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
})

export default connect(mapStateToProps, undefined)(Requests);
