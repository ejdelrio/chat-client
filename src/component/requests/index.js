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
        <div>
          <p>Contact Requests</p>
        </div>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  requests: state.requests
})

export default connect(mapStateToProps, undefined)(Requests);
