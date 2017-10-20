import './_modal.scss';
import React from 'react';

class Modal extends React.Component {

  render() {
    return(
      <section id='modal'>
        <section className={this.props.className}>
          {this.props.children}
          <button onClick={this.props.close}>{this.props.buttonText}</button>
        </section>
      </section>
    )
  }
}

export default Modal;
