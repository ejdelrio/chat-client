import './_contacts.scss';
import React from 'react';
import {connect} from 'react-redux';

import * as SVG from '../svgs';
import Modal from '../modal';
import * as util from '../../lib/util';

class Contacts extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentQuery: '',
      queryResults: Object.values(this.props.contactHash),
      viewProfile: null,
      rederModal: false
    }
    this.onChange = this.onChange.bind(this);
    this.viewContactOptions = this.viewContactOptions.bind(this);
    this.openMessageForm = this.openMessageForm.bind(this);
  }

  viewContactOptions(viewProfile) {
    let renderModal = !this.state.renderModal;
    this.setState({
      viewProfile,
      renderModal
    });
  }

  onChange(e) {
    let {name, value} = e.target;

    let trieResults = value ?
    this.props.contactTrie.searchUsers(value):
    Object.values(this.props.contactHash);

    return  this.setState({
      [name]: value,
      queryResults: trieResults
    });
  }

  openMessageForm(profile) {
    Promise.resolve(this.props.sendMessage(profile))
    .then(() => {
      this.setState({
        renderModal: false,
        viewProfile: null
      })
    })
  }





  render() {
    return(
      <section id='contacts'>
        {util.renderIf(this.state.renderModal,
          <Modal
            className={'contact-select'}
            close={this.viewContactOptions}
            buttonText={'Cancel'}
          >
            <div>
              <button
                onClick={() => this.openMessageForm([this.state.viewProfile])}
              >
                Send Message
              </button>
              <button>View Profile</button>
            </div>
          </Modal>
        )}
        <div>
          <div>
            <div>{SVG.lens('')}</div>
            <input
              type={'text'}
              name={'currentQuery'}
              placeholder={'Search'}
              value={this.state.currentQuery}
              onChange={this.onChange}
            />
          </div>
        </div>
        <ul>
          {this.state.queryResults.map((val, ind) => {
            return(
              <li
                key={ind}
                onClick={() => this.viewContactOptions(val)}
              >
                <p>{val.userName}</p>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  contacts: state.contacts,
  contactHash: state.contactHash,
  contactTrie: state.contactTrie
})

let mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);