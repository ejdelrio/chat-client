import './_modal.scss';
import React from 'react';

class Modal extends React.Component {

  render() {
    return(
      <section id='modal'>
        <section className={this.props.className}>
          <button onClick={this.props.close}>X</button>
          {this.props.children}
        </section>
      </section>
    )
  }
}

export default Modal;
