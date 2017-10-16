import './_requests.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as util from '../../lib/util.js';
import Modal from '../modal';
import * as requestActions from '../../action/request-action.js';

class Requests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acceptRequest: null,
      deleteRequest: null
    }
    this.setRequest = this.setRequest.bind(this);
    this.fireDispatch = this.fireDispatch.bind(this);
  }

  setRequest(currentRequest, status) {
    this.setState({
      [status]: currentRequest});
  }
  fireDispatch(dispatchName, stateKey) {
    this.props[dispatchName](this.state[stateKey])
    .then(() => {
      this.setState({
        [stateKey]: null
      })
    })

  }

  render() {
    let {sent, received} = this.props.requests;
    let modalStatus = this.state.acceptRequest ? 'acceptRequest' : 'deleteRequest';
    console.log(this.props.profile.requests);


    let sentRequestOptions = (
      <div>
        <button onClick={() => this.fireDispatch('deleteRequest', 'deleteRequest')}>
          Delete Request?
        </button>
      </div>
    )

    let receivedRequestOptions = (
      <div>
        <button onClick={() => this.fireDispatch('acceptRequest', 'acceptRequest')}>
          Accept Request
        </button>
        <button onClick={() => this.fireDispatch('rejectRequest', 'acceptRequest')}>
          Reject Request
        </button>
      </div>
    )

    return(
      <section id='requests'>
        {util.renderIf(this.state.acceptRequest || this.state.deleteRequest ,
        <Modal
          className={'request-modal'}
          close={() => this.setRequest(null, modalStatus)}
        >
          {util.renderIf(this.state.acceptRequest, receivedRequestOptions)}
          {util.renderIf(this.state.deleteRequest, sentRequestOptions)}
        </Modal>
        )}
        <div>
          <p>Contact Requests</p>
        </div>
        <section>
          <div>
            <p>Received Requests</p>
            <ul>
              {received.pending.map((req, ind) => {
                return(
                  <li key={ind}>
                    <div
                      className='mobile-select'
                      onClick={() => this.setRequest(req, 'acceptRequest')}
                    ></div>
                    <p>{`You have a pending contact request from ${req.from}.`}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <p>Sent Requests</p>
            <ul>
              {sent.pending.map((req, ind) => {
                return(
                  <li key={ind}>
                    <div
                      className='mobile-select'
                      onClick={() => this.setRequest(req, 'deleteRequest')}
                    ></div>
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

let mapDispatchToProps = dispatch => ({
  acceptRequest: request => dispatch(requestActions.acceptRequest(request)),
  rejectRequest: request => dispatch(requestActions.rejectRequest(request)),
  deleteRequest: request => dispatch(requestActions.deleteRequest(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
