import './_requests.scss';
import React from 'react';
import {connect} from 'react-redux';

class Requests extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let {sent, recieved} = this.props.requests;
    console.log(sent, recieved);
    return(
      <section id='requests'>
        <div>
          <p>Contact Requests</p>
        </div>
        <section>
          <div>
            <p>Recieved Requests</p>
            <ul>
              {recieved.map((req, ind) => {
                return(
                  <li key={ind}>
                    <p>{`You have a pending contact request from ${req.from}.`}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <p>Sent Requests</p>
            <ul>
              {sent.map((req, ind) => {
                return(
                  <li key={ind}>
                    <p>{`You're contact request to ${req.to} has been ${req.status}.`}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  requests: state.requests
})

export default connect(mapStateToProps, undefined)(Requests);
